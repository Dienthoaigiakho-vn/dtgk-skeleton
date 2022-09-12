////////////////////////////////////////////
// REQUIRED IMPLEMENTATION
////////////////////////////////////////////

const { DEFAULT_PATH, BNPL_ORDER_STATUS } = require("../utils/constants");
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

    const paymentRecipient = req.body.paymentRecipient;

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
    // http://192.168.0.115:8080/api/customers/38e78ca3-66c3-4810-a3c9-a91840039999/credifycheck
    const domain = process.env.URL_GET_USER_INFO || 'http://192.168.0.115:8080'

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


module.exports = {
    fetchUserClaimObject,
    getBNPLCallback,
    buildOrderCreationPayload,
}
