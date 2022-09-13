const { fetchUserClaimObject } = require("../dataInteraction");

const pushClaims = async (req, res, { credify }) => {
    // authenticate user
    const organizationId = process.env.APP_ID
    if (!organizationId) {
        return res.status(400).send({ message: "Please recheck config - organization ID" })
    }

    if (!req.body.id || !req.body.credify_id) {
        return res.status(400).send({ message: "Invalid body" })
    }

    try {
        const localId = req.body.id
        const credifyId = req.body.credify_id
        const claims = await fetchUserClaimObject(localId, credifyId, []);

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
        await delay(3000);

        await credify.claims.push(
            organizationId,
            credifyId,
            claims
        )

        res.json({ credifyId })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

module.exports = pushClaims
