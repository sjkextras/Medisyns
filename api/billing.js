// billing.js — Medisyns fee schedule
// Every transaction generates a billable event at the rates below

const FEES = {
  eligibility_verification: 0.10,
  coverage_check:           0.10,
  prescriber_verification:  0.10,
  dispensing_confirmation:  0.10,
  record_writeback:         0.10,
  prior_authorization:      0.50,
  fraud_flag:               0.25,
  cross_provincial_pull:    0.35,
};

function generateBillingEvent(eventType, billedParty, txId) {
  const fee = FEES[eventType];
  if (fee === undefined) {
    throw new Error(`Unknown event type: ${eventType}`);
  }
  return {
    billing_event_id:  `BIL-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,
    transaction_id:    txId,
    event_type:        eventType,
    billed_party:      billedParty,
    amount_cad:        fee,
    currency:          "CAD",
    billing_timestamp: new Date().toISOString(),
    status:            "pending",
  };
}

function getFee(eventType) {
  return FEES[eventType] || null;
}

function getAllFees() {
  return { ...FEES };
}

module.exports = { generateBillingEvent, getFee, getAllFees };
