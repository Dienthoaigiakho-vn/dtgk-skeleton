const PERMISSION_SCOPE = {
  COUNT_USER: "oidc_client:read_user_counts",
  READ_EVALUATED_OFFER: "individual:read_evaluated_offer",
  READ_FILTER_OFFER: "claim_provider:read_filtered_offers",
};

const DEFAULT_PATH = {
  // Credify specs
  CREATE_ORDERS: "/orders",
  PUSH_CLAIMS: "/push-claims",
  OFFERS_FILTERING: "/offers-filtering",
  USER_COUNTS: "/user-counts",
  OFFER_EVALUATION: "/offer-evaluation",
  ENCRYPTED_CLAIMS: "/encrypted-claims",
  BNPL_COMPLETION_CALLBACK: "/bnpl/orders/:orderId/redirect",
  OLD_BNPL_COMPLETION_CALLBACK: "/bnpl/order/:orderId/redirect",
  GET_BNPL_DISBURSEMENT_DOCS: "/bnpl/orders/:orderId/disbursement-requirements",
  SIMULATION: "/simulation",

  // Customizable
  WEBHOOK: "/webhook",
  PUSH_BNPL_DISBURSEMENT_CLAIMS: "/push-disbursement-claims",
};

const DEFAULT_PATH_PREFIX = "/v1";

const WEBHOOK_EVENTS = {
  OFFER_TX_STATUS_UPDATED: "",
  DISPUTE_COMPLETED: "",
  ORDER_STATUS_UPDATED: "BNPL_ORDER_STATUS_UPDATED",
  DISBURSEMENT_STATUS_UPDATED: "BNPL_DISBURSEMENT_REQUIREMENT_STATUS_UPDATED",
};

const DISBURSEMENT_DOCS = {
  INVOICE: "INVOICE",
  DOWN_PAYMENT: "DOWN_PAYMENT",
  FIRST_PAYMENT: "FIRST_PAYMENT",
  DELIVERY: "DELIVERY",
};

const BNPL_ORDER_STATUS = {
  ORDER_STATUS_PENDING: "PENDING",
  ORDER_STATUS_ACKNOWLEDGED: "ACKNOWLEDGED",
  ORDER_STATUS_ACCEPTED: "ACCEPTED",
  ORDER_STATUS_APPROVED: "APPROVED",
  ORDER_STATUS_CANCELED: "CANCELED",
  ORDER_STATUS_CANCELING: "CANCELING",
  ORDER_STATUS_DISBURSING: "DISBURSING",
  ORDER_STATUS_PAID: "PAID",
};

const STANDARD_SCOPES = ["phone", "email", "address", "profile"];

module.exports = {
  PERMISSION_SCOPE,
  DEFAULT_PATH,
  WEBHOOK_EVENTS,
  DISBURSEMENT_DOCS,
  BNPL_ORDER_STATUS,
  STANDARD_SCOPES,
  DEFAULT_PATH_PREFIX,
};
