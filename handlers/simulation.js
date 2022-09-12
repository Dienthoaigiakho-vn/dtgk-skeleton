
const simulation = async (req, res, { db, credify }) => {
    res.status(200).json({
        success: true, data: [
            {
                "schema": "schema-1",
                "provider": {
                    "id": "8af0e885-a06c-4508-8d17-03e4fa1ea526",
                    "name": "Housecare",
                    "description": "LetMeCare – LetMeCare JSC",
                    "logo_url": "https://assets.credify.dev/images/logos/home_credit.png",
                    "app_url": "https://www.letmecare.vn/",
                    "categories": [],
                    "scope_definitions": [
                        {
                            "id": "63a47ef0-76b1-11eb-9439-0242ac130002",
                            "provider_id": "8af0e885-a06c-4508-8d17-03e4fa1ea526",
                            "name": "8af0e885-a06c-4508-8d17-03e4fa1ea526:payment-amount",
                            "display_name": "Payment amount",
                            "description": "Payment amount",
                            "price": {
                                "value": "2.00",
                                "currency": "VND"
                            },
                            "is_onetime_charge": false,
                            "is_active": true,
                            "claims": [
                                {
                                    "id": "63a489e0-76b1-11eb-9439-0242ac130002",
                                    "scope_id": "63a47ef0-76b1-11eb-9439-0242ac130002",
                                    "main_claim_id": "",
                                    "name": "52f5969d-d51a-4616-80be-43b9f5aff548:payment-amount",
                                    "display_name": "Payment amount",
                                    "description": "Payment amount",
                                    "value_type": "INTEGER",
                                    "min_value": 0,
                                    "max_value": 500000000,
                                    "is_active": true,
                                    "created_at": "2021-01-20T02:36:58.238194Z",
                                    "updated_at": "2021-01-20T02:36:58.238194Z",
                                    "nested": [],
                                    "main": null,
                                    "scope": null
                                }
                            ],
                            "created_at": "2021-01-20T02:36:58.236308Z",
                            "updated_at": "2021-01-20T02:36:58.236308Z",
                            "provider": null
                        },
                        {
                            "id": "487075aa-76af-11eb-9439-0242ac130002",
                            "provider_id": "8af0e885-a06c-4508-8d17-03e4fa1ea526",
                            "name": "8af0e885-a06c-4508-8d17-03e4fa1ea526:housecare-score",
                            "display_name": "House care score",
                            "description": "House care score",
                            "price": {
                                "value": "1.00",
                                "currency": "VND"
                            },
                            "is_onetime_charge": false,
                            "is_active": true,
                            "claims": [
                                {
                                    "id": "63a48ac6-76b1-11eb-9439-0242ac130002",
                                    "scope_id": "487075aa-76af-11eb-9439-0242ac130002",
                                    "main_claim_id": "",
                                    "name": "52f5969d-d51a-4616-80be-43b9f5aff548:housecare-score",
                                    "display_name": "House care score",
                                    "description": "House care score",
                                    "value_type": "INTEGER",
                                    "min_value": 0,
                                    "max_value": 500,
                                    "is_active": true,
                                    "created_at": "2021-01-20T02:36:58.238194Z",
                                    "updated_at": "2021-01-20T02:36:58.238194Z",
                                    "nested": [],
                                    "main": null,
                                    "scope": null
                                }
                            ],
                            "created_at": "2021-01-20T02:36:58.236308Z",
                            "updated_at": "2021-01-20T02:36:58.236308Z",
                            "provider": null
                        }
                    ],
                    "placement_fee": null,
                    "shareable_basic_profile": [
                        "NAME",
                        "EMAIL",
                        "PHONE"
                    ]
                },
                "product": {
                    "code": "product-for-demo",
                    "product_type_code": "insurance:health-insurance:for-individual",
                    "display_name": "Bảo hiểm tai nạn",
                    "description": "",
                    "created_at": "2021-12-21T13:46:58.307492Z",
                    "updated_at": "2021-12-21T13:46:58.307492Z",
                    "detail": null,
                    "conversion_commissions": [
                        {
                            "name": "hdi-tai-nan-1-agency-fee",
                            "display_name": "Bảo hiểm tai nạn - Agency Fee",
                            "includes_vat": false,
                            "rate": 20,
                            "fixed_value": null
                        },
                        {
                            "name": "hdi-tai-nan-2-bonus-agency-support",
                            "display_name": "Bảo hiểm tai nạn - Bonus Agency Support",
                            "includes_vat": false,
                            "rate": 20,
                            "fixed_value": null
                        },
                        {
                            "name": "hdi-tai-nan-3-service-fee",
                            "display_name": "Bảo hiểm tai nạn - Service Fee",
                            "includes_vat": false,
                            "rate": 10,
                            "fixed_value": null
                        }
                    ],
                    "id": "262ef210-d2c6-4621-8393-fd55c1e24f4c",
                    "consumer_id": "cc61532e-4668-4bee-b8c1-95fd0bec7f09",
                    "custom_scopes": [],
                    "consumer": null,
                    "website_url": "",
                    "thumbnail_url": "",
                    "banner_url": "",
                    "term_of_use_url": "",
                    "required_claims": null,
                    "custom_fields": {}
                },
                "tenor": {
                    "value": 3,
                    "unit": "MONTH"
                },
                "total_amount": {
                    "value": "10000000",
                    "currency": "VND"
                },
                "pay_later_amount": {
                    "value": "9000000",
                    "currency": "VND"
                },
                "period_amount": {
                    "value": "1000000",
                    "currency": "VND"
                },
                "down_payment": {
                    "value": "1000000",
                    "currency": "VND"
                },
                "fee": {
                    "value": "500000",
                    "currency": "VND"
                }
            },
            {
                "schema": "schema-1",
                "provider": {
                    "id": "8af0e885-a06c-4508-8d17-03e4fa1ea526",
                    "name": "Housecare",
                    "description": "LetMeCare – LetMeCare JSC",
                    "logo_url": "https://assets.credify.dev/images/logos/home_credit.png",
                    "app_url": "https://www.letmecare.vn/",
                    "categories": [],
                    "scope_definitions": [
                        {
                            "id": "63a47ef0-76b1-11eb-9439-0242ac130002",
                            "provider_id": "8af0e885-a06c-4508-8d17-03e4fa1ea526",
                            "name": "8af0e885-a06c-4508-8d17-03e4fa1ea526:payment-amount",
                            "display_name": "Payment amount",
                            "description": "Payment amount",
                            "price": {
                                "value": "2.00",
                                "currency": "VND"
                            },
                            "is_onetime_charge": false,
                            "is_active": true,
                            "claims": [
                                {
                                    "id": "63a489e0-76b1-11eb-9439-0242ac130002",
                                    "scope_id": "63a47ef0-76b1-11eb-9439-0242ac130002",
                                    "main_claim_id": "",
                                    "name": "52f5969d-d51a-4616-80be-43b9f5aff548:payment-amount",
                                    "display_name": "Payment amount",
                                    "description": "Payment amount",
                                    "value_type": "INTEGER",
                                    "min_value": 0,
                                    "max_value": 500000000,
                                    "is_active": true,
                                    "created_at": "2021-01-20T02:36:58.238194Z",
                                    "updated_at": "2021-01-20T02:36:58.238194Z",
                                    "nested": [],
                                    "main": null,
                                    "scope": null
                                }
                            ],
                            "created_at": "2021-01-20T02:36:58.236308Z",
                            "updated_at": "2021-01-20T02:36:58.236308Z",
                            "provider": null
                        },
                        {
                            "id": "487075aa-76af-11eb-9439-0242ac130002",
                            "provider_id": "8af0e885-a06c-4508-8d17-03e4fa1ea526",
                            "name": "8af0e885-a06c-4508-8d17-03e4fa1ea526:housecare-score",
                            "display_name": "House care score",
                            "description": "House care score",
                            "price": {
                                "value": "1.00",
                                "currency": "VND"
                            },
                            "is_onetime_charge": false,
                            "is_active": true,
                            "claims": [
                                {
                                    "id": "63a48ac6-76b1-11eb-9439-0242ac130002",
                                    "scope_id": "487075aa-76af-11eb-9439-0242ac130002",
                                    "main_claim_id": "",
                                    "name": "52f5969d-d51a-4616-80be-43b9f5aff548:housecare-score",
                                    "display_name": "House care score",
                                    "description": "House care score",
                                    "value_type": "INTEGER",
                                    "min_value": 0,
                                    "max_value": 500,
                                    "is_active": true,
                                    "created_at": "2021-01-20T02:36:58.238194Z",
                                    "updated_at": "2021-01-20T02:36:58.238194Z",
                                    "nested": [],
                                    "main": null,
                                    "scope": null
                                }
                            ],
                            "created_at": "2021-01-20T02:36:58.236308Z",
                            "updated_at": "2021-01-20T02:36:58.236308Z",
                            "provider": null
                        }
                    ],
                    "placement_fee": null,
                    "shareable_basic_profile": [
                        "NAME",
                        "EMAIL",
                        "PHONE"
                    ]
                },
                "product": {
                    "code": "product-for-demo",
                    "product_type_code": "insurance:health-insurance:for-individual",
                    "display_name": "Bảo hiểm tai nạn",
                    "description": "",
                    "created_at": "2021-12-21T13:46:58.307492Z",
                    "updated_at": "2021-12-21T13:46:58.307492Z",
                    "detail": null,
                    "conversion_commissions": [
                        {
                            "name": "hdi-tai-nan-1-agency-fee",
                            "display_name": "Bảo hiểm tai nạn - Agency Fee",
                            "includes_vat": false,
                            "rate": 20,
                            "fixed_value": null
                        },
                        {
                            "name": "hdi-tai-nan-2-bonus-agency-support",
                            "display_name": "Bảo hiểm tai nạn - Bonus Agency Support",
                            "includes_vat": false,
                            "rate": 20,
                            "fixed_value": null
                        },
                        {
                            "name": "hdi-tai-nan-3-service-fee",
                            "display_name": "Bảo hiểm tai nạn - Service Fee",
                            "includes_vat": false,
                            "rate": 10,
                            "fixed_value": null
                        }
                    ],
                    "id": "262ef210-d2c6-4621-8393-fd55c1e24f4c",
                    "consumer_id": "cc61532e-4668-4bee-b8c1-95fd0bec7f09",
                    "custom_scopes": [],
                    "consumer": null,
                    "website_url": "",
                    "thumbnail_url": "",
                    "banner_url": "",
                    "term_of_use_url": "",
                    "required_claims": null,
                    "custom_fields": {}
                },
                "tenor": {
                    "value": 6,
                    "unit": "MONTH"
                },
                "total_amount": {
                    "value": "10000000",
                    "currency": "VND"
                },
                "pay_later_amount": {
                    "value": "9000000",
                    "currency": "VND"
                },
                "period_amount": {
                    "value": "1000000",
                    "currency": "VND"
                },
                "down_payment": {
                    "value": "1000000",
                    "currency": "VND"
                },
                "fee": {
                    "value": "500000",
                    "currency": "VND"
                }
            },
            {
                "schema": "schema-1",
                "provider": {
                    "id": "8af0e885-a06c-4508-8d17-03e4fa1ea333",
                    "name": "Housecare",
                    "description": "LetMeCare – LetMeCare JSC",
                    "logo_url": "https://assets.credify.dev/images/logos/home_credit.png",
                    "app_url": "https://www.letmecare.vn/",
                    "categories": [],
                    "scope_definitions": [
                        {
                            "id": "63a47ef0-76b1-11eb-9439-0242ac130002",
                            "provider_id": "8af0e885-a06c-4508-8d17-03e4fa1ea526",
                            "name": "8af0e885-a06c-4508-8d17-03e4fa1ea526:payment-amount",
                            "display_name": "Payment amount",
                            "description": "Payment amount",
                            "price": {
                                "value": "2.00",
                                "currency": "VND"
                            },
                            "is_onetime_charge": false,
                            "is_active": true,
                            "claims": [
                                {
                                    "id": "63a489e0-76b1-11eb-9439-0242ac130002",
                                    "scope_id": "63a47ef0-76b1-11eb-9439-0242ac130002",
                                    "main_claim_id": "",
                                    "name": "52f5969d-d51a-4616-80be-43b9f5aff548:payment-amount",
                                    "display_name": "Payment amount",
                                    "description": "Payment amount",
                                    "value_type": "INTEGER",
                                    "min_value": 0,
                                    "max_value": 500000000,
                                    "is_active": true,
                                    "created_at": "2021-01-20T02:36:58.238194Z",
                                    "updated_at": "2021-01-20T02:36:58.238194Z",
                                    "nested": [],
                                    "main": null,
                                    "scope": null
                                }
                            ],
                            "created_at": "2021-01-20T02:36:58.236308Z",
                            "updated_at": "2021-01-20T02:36:58.236308Z",
                            "provider": null
                        },
                        {
                            "id": "487075aa-76af-11eb-9439-0242ac130002",
                            "provider_id": "8af0e885-a06c-4508-8d17-03e4fa1ea526",
                            "name": "8af0e885-a06c-4508-8d17-03e4fa1ea526:housecare-score",
                            "display_name": "House care score",
                            "description": "House care score",
                            "price": {
                                "value": "1.00",
                                "currency": "VND"
                            },
                            "is_onetime_charge": false,
                            "is_active": true,
                            "claims": [
                                {
                                    "id": "63a48ac6-76b1-11eb-9439-0242ac130002",
                                    "scope_id": "487075aa-76af-11eb-9439-0242ac130002",
                                    "main_claim_id": "",
                                    "name": "52f5969d-d51a-4616-80be-43b9f5aff548:housecare-score",
                                    "display_name": "House care score",
                                    "description": "House care score",
                                    "value_type": "INTEGER",
                                    "min_value": 0,
                                    "max_value": 500,
                                    "is_active": true,
                                    "created_at": "2021-01-20T02:36:58.238194Z",
                                    "updated_at": "2021-01-20T02:36:58.238194Z",
                                    "nested": [],
                                    "main": null,
                                    "scope": null
                                }
                            ],
                            "created_at": "2021-01-20T02:36:58.236308Z",
                            "updated_at": "2021-01-20T02:36:58.236308Z",
                            "provider": null
                        }
                    ],
                    "placement_fee": null,
                    "shareable_basic_profile": [
                        "NAME",
                        "EMAIL",
                        "PHONE"
                    ]
                },
                "product": {
                    "code": "product-for-demo",
                    "product_type_code": "insurance:health-insurance:for-individual",
                    "display_name": "Bảo hiểm tai nạn",
                    "description": "",
                    "created_at": "2021-12-21T13:46:58.307492Z",
                    "updated_at": "2021-12-21T13:46:58.307492Z",
                    "detail": null,
                    "conversion_commissions": [
                        {
                            "name": "hdi-tai-nan-1-agency-fee",
                            "display_name": "Bảo hiểm tai nạn - Agency Fee",
                            "includes_vat": false,
                            "rate": 20,
                            "fixed_value": null
                        },
                        {
                            "name": "hdi-tai-nan-2-bonus-agency-support",
                            "display_name": "Bảo hiểm tai nạn - Bonus Agency Support",
                            "includes_vat": false,
                            "rate": 20,
                            "fixed_value": null
                        },
                        {
                            "name": "hdi-tai-nan-3-service-fee",
                            "display_name": "Bảo hiểm tai nạn - Service Fee",
                            "includes_vat": false,
                            "rate": 10,
                            "fixed_value": null
                        }
                    ],
                    "id": "262ef210-d2c6-4621-8393-fd55c1e24f4c",
                    "consumer_id": "cc61532e-4668-4bee-b8c1-95fd0bec7f09",
                    "custom_scopes": [],
                    "consumer": null,
                    "website_url": "",
                    "thumbnail_url": "",
                    "banner_url": "",
                    "term_of_use_url": "",
                    "required_claims": null,
                    "custom_fields": {}
                },
                "tenor": {
                    "value": 3,
                    "unit": "MONTH"
                },
                "total_amount": {
                    "value": "10000000",
                    "currency": "VND"
                },
                "pay_later_amount": {
                    "value": "9000000",
                    "currency": "VND"
                },
                "period_amount": {
                    "value": "1000000",
                    "currency": "VND"
                },
                "down_payment": {
                    "value": "1000000",
                    "currency": "VND"
                },
                "fee": {
                    "value": "500000",
                    "currency": "VND"
                }
            }
        ]
    })
}

module.exports = simulation