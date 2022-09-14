////////////////////////////////////////////
// REQUIRED IMPLEMENTATION
////////////////////////////////////////////

const { BNPL_ORDER_STATUS } = require("../utils/constants");
/**
 * This returns Credify scope object for a specified user.
 *
 * @param localId string. Internal ID in your system
 * @param credifyId string. Credify ID
 * @param includingScopes string[]. If this is empty, it means all scopes.
 * @param withCommitments boolean. If this is true, `commitment` should be added into the scope object.
 * @returns {Promise<Object|null>}
 */
const fetchUserClaimObject = async (localId, includingScopes) => {
    const user = await getUserInfo(localId)

    if (!user) {
        console.error('not found user', localId)
        return null
    }

    const shareableProfile = (process.env.APP_PROVIDING_BASIC_PROFILE || "").split(",").map((p) => p.toUpperCase());
    const claims = {};

    let commitments = undefined;

    // Add advanced scopes

    // Add basic scopes. Object keys should remain same.
    if (includingScopes.length === 0 || includingScopes.includes("phone")) {
        if (shareableProfile.includes("PHONE")) {
            claims[`phone`] = {
                [`phone_number`]: `+84${user.phone}`,
                [`phone_commitment`]: commitments ? commitments[`phone`] : undefined,
            };
        }
    }

    return claims
}

/**
 * This returns BNPL completion callback page.
 * This is called from the FI context when all the actions necessary from the FI is completed.
 *
 * You may process order status in this callback and return a completed page URL.
 *
 * @param db
 * @param orderId
 * @return {Promise<string>}
 */
const getBNPLCallback = async (db, orderId) => {
    const domain = process.env.URL_SUCCESS_PAGE || 'https://dienthoaigiakho.vn'
    return `${domain}/mua-tra-gop/success`
}

/**
 * This composes BNPL order creation payload.
 * Please check the detailed information below.
 *
 * @param req
 * @return {{totalAmount: *, orderLines: *, paymentRecipient: *, referenceId: *}}
 */
const buildOrderCreationPayload = (req) => {
    /**
     * {string}
     * @example "12345abc"
     */
    const referenceId = req.body.reference_id;

    /**
     * {Object}
     * @example
     * {
     *   "value": "9000000",
     *   "currency": "VND"
     * }
     */
    const totalAmount = req.body.total_amount; // This should be calculated on backend


    /**
     * {Array<Object>}
     * @example
     * [
     *   {
     *     "name": "iPhone 12",
     *     "reference_id": "iphone-12-black",
     *     "image_url": "https://www.apple.com/v/iphone-12/j/images/specs/finish_iphone12__ctf4hoqpbnki_large_2x.jpg",
     *     "product_url": "https://www.apple.com/vn/iphone-12/specs/",
     *     "quantity": 1,
     *     "unit_price": {
     *       "value": "9000000",
     *       "currency": "VND"
     *     },
     *     "subtotal": {
     *       "value": "9000000",
     *       "currency": "VND"
     *     },
     *     "measurement_unit": "EA"
     *   }
     * ]
     */
    const orderLines = req.body.order_lines;

    /**
     * {Object}
     * @example
     * {
     *   "name": "Apple VN",
     *   "number": "190123123123",
     *   "branch": "",
     *   "bank": "Techcombank"
     * }
     */

    const paymentRecipient = {
        "name": "Công ty TNHH GIÁ KHO GROUP",
        "number": "0020100026725004",
        "branch": "006",
        "bank": "333"
    }

    return {
        referenceId,
        totalAmount,
        orderLines,
        paymentRecipient,
    }
}
/////////////////////////////////////////////////////////////
// Private methods (please modify the following as you like.)
/////////////////////////////////////////////////////////////

/**
 * This retrieves user model from market by http request
 * The key will be either local (internal) ID
 *
 * @param db
 * @param localId
 * @returns {Promise<Model|null>}
 */
const getUserInfo = async (userId) => {
    const domain = process.env.URL_GET_USER_INFO || 'https://stg.api.dienthoaigiakho.vn/'

    axios
        .get(`${domain}/api/customers/${userId}/credifycheck`)
        .then(res => {
            console.log(`statusCode: ${res.status}`);
            console.log(res);
            return res
        })
        .catch(error => {
            console.error(error);
        });
}

/**
 * This function handles offer status update notified via webhook
 * This function may be called several times
 * @param payload
 * @returns {Promise<void>}
 */
const handleOfferStatusUpdate = async (payload) => {
    // Optional
    // Not necessary for BNPL use
}

/**
 * This function handles dispute completion notified via webhook
 * This function may be called several times
 * @param payload
 * @returns {Promise<void>}
 */
const handleDisputeCompletion = async (payload) => {
    // Optional
    // Not necessary for BNPL use
}

/**
 * This function handles order status update notified via webhook
 * This function may be called several times
 * @param orderId
 * @param status
 * @returns {Promise<void>}
 */
const handleOrderStatusUpdate = async (orderId, referenceId, status) => {
    switch (status) {
        case BNPL_ORDER_STATUS.ORDER_STATUS_CANCELED:
            // Handle cancellation callback
            break
        case BNPL_ORDER_STATUS.ORDER_STATUS_APPROVED:
            // BNPL is approved.
            // Next step should be delivery.

            break
        case BNPL_ORDER_STATUS.ORDER_STATUS_DISBURSING:
            // This is a confirmation from a BNPL provider to disburse loan
            break
        case BNPL_ORDER_STATUS.ORDER_STATUS_PAID:
            // Disbursement is completed
            break
        default:
            break
    }

    // TODO: cal api upsert transaction id, status bnpl
}


module.exports = {
    fetchUserClaimObject,
    getBNPLCallback,
    buildOrderCreationPayload,
    handleOfferStatusUpdate,
    handleDisputeCompletion,
    handleOrderStatusUpdate,
}
