const { Router } = require("express");
const { Credify } = require("@credify/nodejs")


const formKey = require("../utils/formKey")
const { DEFAULT_PATH } = require("../utils/constants");

module.exports = ({ }) => {
    const api = Router()

    // This is necessary to start BNPL
    api.post("/orders", async (req, res) => {
        const credify = await Credify.create(formKey(signingKey), apiKey, { mode })
        return createOrder(req, res, { db, credify })
    })

    api.post(DEFAULT_PATH.PUSH_CLAIMS, async (req, res) => {
        const credify = await Credify.create(formKey(signingKey), apiKey, { mode })
        return pushClaims(req, res, { db, credify })
    })

    // Called by Credify backend
    api.post(DEFAULT_PATH.OFFERS_FILTERING, async (req, res) => {
        const credify = await Credify.create(formKey(signingKey), apiKey, { mode })
        return filterOffer(req, res, { db, credify })
    })

    // Called by Credify backend
    api.post(DEFAULT_PATH.USER_COUNTS, async (req, res) => {
        const credify = await Credify.create(formKey(signingKey), apiKey, { mode })
        return countUsers(req, res, { db, credify })
    })

    return api;
}  