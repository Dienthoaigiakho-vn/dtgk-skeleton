const { getBNPLCallback } = require("../dataInteraction");

const bnplCallback = async (req, res, { credify }) => {
  const orderId = req.params.orderId;
  if (!orderId) {
    return res.sendStatus(500).json({ message: "No order ID" });
  }
  const isError = !!req.query.error_message;

  const redirectUrl = await getBNPLCallback(orderId, isError);
  res.redirect(redirectUrl);
};

module.exports = bnplCallback;
