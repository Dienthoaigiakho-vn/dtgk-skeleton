const extractToken = require("../utils/extractToken");
const { PERMISSION_SCOPE } = require("../utils/constants");

const evaluate = async (req, res, { credify }) => {
  if (process.env.CONTEXT_ENV !== "Jest") {
    const token = extractToken(req);
    try {
      const validToken = await credify.auth.introspectToken(
        token,
        PERMISSION_SCOPE.READ_EVALUATED_OFFER
      );
      if (!validToken) {
        return res.status(401).send({ message: "Unauthorized" });
      }
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }

  if (!req.body.credify_id || !req.body.scopes) {
    return res.status(400).send({ message: "Invalid body" });
  }
  let conditions = req.body.conditions || [{}];
  conditions = conditions.map((c) => {
    return c === null ? {} : c;
  });

  try {
    res.json(
      (response = {
        data: {},
      })
    );
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = evaluate;
