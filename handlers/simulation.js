const DOWN_PAYMENT_FIXED_FIELD = "fixedValue";
const DOWN_PAYMENT_TYPE = {
    inAmount: "IN_AMOUNT",
    overAmount: "OVER_AMOUNT",
};

const productDetail = {
    min_loan_amount: {
        value: "4000000.00",
        currency: "VND"
    },
    max_loan_amount: {
        value: "30000000.00",
        currency: "VND"
    },
    duration: {
        value: 10,
        unit: "DAY"
    },
    min_apr_percent: 0,
    max_apr_percent: 0,
    down_payment: {
        type: "IN_AMOUNT",
        amount: {
            type: "RATE",
            rate: 0
        }
    },
    available_terms: [
        {
            duration: {
                value: 3,
                unit: "MONTH"
            },
            interest: 0,
            fee: {
                type: "RATE",
                rate: 0
            }
        },
        {
            duration: {
                value: 6,
                unit: "MONTH"
            },
            interest: 0.07,
            fee: {
                type: "RATE",
                rate: 0
            }
        },
        {
            duration: {
                value: 9,
                unit: "MONTH"
            },
            interest: 0.08,
            fee: {
                type: "RATE",
                rate: 0
            }
        }
    ],
    consumer_disbursement_requirements: [
        "INVOICE",
        "DELIVERY",
        "DOWN_PAYMENT"
    ],
    provider_disbursement_requirements: [],
}

const getDownPaymentInAmount = (
    downPaymentAmount,
    orderPrice
) => {
    if (DOWN_PAYMENT_FIXED_FIELD in downPaymentAmount) {
        return downPaymentAmount.fixedValue.value;
    }

    return Math.round(orderPrice * (downPaymentAmount.rate || 0));
};

const getDownPaymentOverAmount = (
    downPayment,
    orderAmount,
    loanRange,
) => {
    const isZeroDownPaymentRate =
        downPayment?.amount?.rate === 0 ||
        downPayment?.amount.fixedValue?.value === 0;
    const inLoanRange = inBetween({
        value: orderAmount,
        minValue: loanRange.minLoanAmountValue,
        maxValue: loanRange.maxLoanAmountValue,
    });

    if (inLoanRange) {
        return 0;
    }

    if (isZeroDownPaymentRate) {
        return orderAmount - loanRange.maxLoanAmountValue;
    }

    let maxDownPayment =
        downPayment.amount.rate || downPayment.amount.fixedValue.value;

    let isNotFixedAmount = "rate" in downPayment.amount;
    if (isNotFixedAmount) {
        maxDownPayment = maxDownPayment * orderAmount;
    }

    let currentDownPayment = orderAmount - loanRange.maxLoanAmountValue;
    return currentDownPayment <= maxDownPayment
        ? currentDownPayment
        : maxDownPayment;
};

const calculateDownPayment = (
    downPayment,
    orderAmount,
    { maxLoanAmountValue, minLoanAmountValue }
) => {
    const isInAmountType = downPayment?.type === DOWN_PAYMENT_TYPE.inAmount;

    if (isInAmountType) {
        return getDownPaymentInAmount(downPayment.amount, orderAmount);
    } else {
        return getDownPaymentOverAmount(downPayment, orderAmount, { maxLoanAmountValue, minLoanAmountValue });
    }
}

const calculateTotalAmount = (
    orderAmountValue,
    downPaymentAmount,
    interest = 0
) => {
    const amountLeft = orderAmountValue - downPaymentAmount;
    return Math.round(amountLeft + amountLeft * interest);
};

const createPaymentTerm = (
    term,
    totalAmount,
) => {
    return {
        value: `${Math.ceil(totalAmount / (term?.duration?.value || 1))}`,
        currency: "VND",
    };
};

const simulation = async (req, res, { credify }) => {
    // try {
    //     const productType = req.body.productType
    //     const providerIds = req.body.providerIds
    //     const inputs = req.body.inputs
    //     const response = await credify.offer.simulate(productType, providerIds, inputs)

    //     return res.status(200).json(response)
    // } catch (error) {
    //     return res.status(500).json({ message: error.message })
    // }

    try {
        const inputs = req.body.inputs
        const orderAmount = Number(inputs?.transaction_amount?.value || 0)
        const downPaymentAmount = calculateDownPayment(productDetail.down_payment, orderAmount, {
            minLoanAmountValue: Number(productDetail.min_loan_amount.value),
            maxLoanAmountValue: Number(productDetail.max_loan_amount.value),
        })
        const result = productDetail.available_terms
            .filter((term) => term.duration?.value && term.duration?.unit)
            .map((term, index) => {
                const payLaterAmount = orderAmount - downPaymentAmount;
                const fee = payLaterAmount * (term.interest || 0);
                const totalAmount = payLaterAmount + fee
                const periodAmount = createPaymentTerm(term, totalAmount)
                return {
                    schema: `schema-demo-${index}`,
                    provider: {
                        id: "09de7359-7f29-41a0-bd07-095d1ce7f85d",
                        name: "OCB",
                        description: "OCB",
                        logo_url: "https://assets.credify.dev/images/logos/ocb.png",
                        app_url: "https://www.ocb.com.vn/",
                        categories: [],
                        scope_definitions: [],
                        placement_fee: null,
                        shareable_basic_profile: [
                            "PHONE"
                        ]
                    },
                    product: {
                        code: "product-for-dtgk",
                        product_type_code: "insurance:health-insurance:for-individual",
                        display_name: "Bảo hiểm tai nạn",
                        description: "",
                        created_at: "2021-12-21T13:46:58.307492Z",
                        updated_at: "2021-12-21T13:46:58.307492Z",
                        detail: null,
                        conversion_commissions: [],
                        id: "262ef210-d2c6-4621-8393-fd55c1e24f4c",
                        consumer_id: "cc61532e-4668-4bee-b8c1-95fd0bec7f09",
                    },
                    tenor: term.duration,
                    total_amount: {
                        value: `${totalAmount}`,
                        currency: "VND"
                    },
                    pay_later_amount: {
                        value: `${payLaterAmount}`,
                        currency: "VND"
                    },
                    period_amount: periodAmount,
                    down_payment: {
                        value: `${downPaymentAmount}`,
                        currency: "VND"
                    },
                    fee: {
                        value: `${fee}`,
                        currency: "VND"
                    }
                }
            });

        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = simulation