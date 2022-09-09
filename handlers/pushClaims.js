const { fetchUserClaimObject } = require("../dataInteraction");

const pushClaims = async (req, res, { db, credify }) => {

    // const validRequest = await authenticateInternalUser(db, req);
    // if (!validRequest) {
    //   return res.status(401).send({ message: "Unauthorized" })
    // }

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
        const claims = await fetchUserClaimObject(db, localId, credifyId, [], false);

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
        await delay(3000);

        const commitments = await credify.claims.push(
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
