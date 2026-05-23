// ledger.js — Medisyns transaction ledger
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

const ledger = [];

function hashPayload(payload) {
  return crypto.createHash('sha256').update(JSON.stringify(payload)).digest('hex');
}

function writeTransaction(eventType, payload, billingEvent) {
  const txId = `TX-${uuidv4().toUpperCase()}`;
  const timestamp = new Date().toISOString();
  const hash = hashPayload({ eventType, payload, timestamp });
  const entry = {
    tx_id:        txId,
    event_type:   eventType,
    timestamp:    timestamp,
    payload_hash: hash,
    billed_party: billingEvent.billed_party,
    amount_cad:   billingEvent.amount_cad,
    billing_ref:  billingEvent.billing_event_id,
    status:       "confirmed",
    province:     payload.province || "unspecified",
    patient_ref:  payload.patient_ref || null,
  };
  ledger.push(entry);
  return { txId, hash, timestamp };
}

function getTransactionLog(filters = {}) {
  let results = [...ledger];
  if (filters.province)     results = results.filter(e => e.province === filters.province);
  if (filters.event_type)   results = results.filter(e => e.event_type === filters.event_type);
  if (filters.billed_party) results = results.filter(e => e.billed_party === filters.billed_party);
  if (filters.from)         results = results.filter(e => new Date(e.timestamp) >= new Date(filters.from));
  if (filters.to)           results = results.filter(e => new Date(e.timestamp) <= new Date(filters.to));
  return results;
}

function getLedgerSummary() {
  const totalRevenue = ledger.reduce((sum, e) => sum + e.amount_cad, 0);
  const byEventType = {};
  const byProvince = {};
  ledger.forEach(e => {
    byEventType[e.event_type] = (byEventType[e.event_type] || 0) + 1;
    byProvince[e.province]    = (byProvince[e.province]    || 0) + 1;
  });
  return {
    total_transactions: ledger.length,
    total_revenue_cad:  Math.round(totalRevenue * 100) / 100,
    by_event_type:      byEventType,
    by_province:        byProvince,
  };
}

module.exports = { writeTransaction, getTransactionLog, getLedgerSummary };

