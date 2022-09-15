const {
  handleOfferStatusUpdate,
  handleDisputeCompletion,
  handleOrderStatusUpdate,
} = require("../dataInteraction");
const {
  DEFAULT_PATH_PREFIX,
  DEFAULT_PATH,
  WEBHOOK_EVENTS,
} = require("../utils/constants");

const webhook = async (req, res, { credify }) => {
  const signature = req.headers["signature"] || req.headers["Signature"];
  if (!signature) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  const eventId = req.headers["X-Event-Id"] || req.headers["x-event-id"];
  if (!eventId) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  const timestamp =
    req.headers["X-Event-Timestamp"] || req.headers["x-event-timestamp"];
  if (!timestamp) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  const apiDomain = process.env.URL_BASE_API;
  const trimmedDomain = apiDomain.endsWith("/")
    ? apiDomain.slice(0, -1)
    : apiDomain;
  const webhookEndpoint = `${trimmedDomain}${DEFAULT_PATH_PREFIX}${DEFAULT_PATH.WEBHOOK}`;
  const valid = await credify.auth.verifyWebhook(
    signature,
    req.body,
    webhookEndpoint,
    eventId,
    timestamp
  );
  if (!valid) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  try {
    let orderId;
    switch (req.body.type) {
      case WEBHOOK_EVENTS.OFFER_TX_STATUS_UPDATED:
        await handleOfferStatusUpdate(req.body);
        break;
      case WEBHOOK_EVENTS.DISPUTE_COMPLETED:
        await handleDisputeCompletion(req.body);
        break;
      case WEBHOOK_EVENTS.ORDER_STATUS_UPDATED:
        orderId = req.body.order_id;
        const status = req.body.order_status;
        const referenceId = req.body.reference_id;
        await handleOrderStatusUpdate(orderId, referenceId, status);
        break;
      case WEBHOOK_EVENTS.DISBURSEMENT_STATUS_UPDATED:
        break;
      default:
        break;
    }
    return res.status(200).json({ success: true, data: orderId });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = webhook;
