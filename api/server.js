const express = require('express');
const { generateBillingEvent } = require('./billing');
const { writeTransaction, getTransactionLog, getLedgerSummary } = require('./ledger');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    protocol:  "Medisyns Verification Protocol",
    version:   "1.0.0",
    status:    "operational",
    timestamp: new Date().toISOString(),
    endpoints: ["POST /verify","POST /authorize","POST /dispense-confirm","GET /transaction-log","GET /ledger-summary"]
  });
});

app.post('/verify', (req, res) => {
  const { patient_ref, prescriber_id, province, billed_party } = req.body;
  if (!patient_ref || !prescriber_id || !province || !billed_party) {
    return res.status(400).json({ error: "Missing required fields: patient_ref, prescriber_id, province, billed_party" });
  }
  const eligibilityBilling = generateBillingEvent('eligibility_verification', billed_party, `temp-${Date.now()}`);
  const eligibilityTx = writeTransaction('eligibility_verification', req.body, eligibilityBilling);
  const prescriberBilling = generateBillingEvent('prescriber_verification', billed_party, eligibilityTx.txId);
  const prescriberTx = writeTransaction('prescriber_verification', req.body, prescriberBilling);
  res.json({
    status: "verified", patient_ref, prescriber_id, province,
    eligibility_tx: eligibilityTx.txId, prescriber_tx: prescriberTx.txId,
    total_billed_cad: 0.20, billed_party, timestamp: new Date().toISOString(),
    audit_hashes: { eligibility: eligibilityTx.hash, prescriber: prescriberTx.hash }
  });
});

app.post('/authorize', (req, res) => {
  const { patient_ref, drug_id, requires_prior_auth, province, billed_party } = req.body;
  if (!patient_ref || !drug_id || !province || !billed_party) {
    return res.status(400).json({ error: "Missing required fields: patient_ref, drug_id, province, billed_party" });
  }
  const coverageBilling = generateBillingEvent('coverage_check', billed_party, `temp-${Date.now()}`);
  const coverageTx = writeTransaction('coverage_check', req.body, coverageBilling);
  let priorAuthTx = null;
  let totalBilled = 0.10;
  if (requires_prior_auth) {
    const priorAuthBilling = generateBillingEvent('prior_authorization', billed_party, coverageTx.txId);
    priorAuthTx = writeTransaction('prior_authorization', req.body, priorAuthBilling);
    totalBilled += 0.50;
  }
  res.json({
    status: "authorized", patient_ref, drug_id, province,
    coverage_tx: coverageTx.txId, prior_auth_tx: priorAuthTx ? priorAuthTx.txId : null,
    prior_auth_req: requires_prior_auth || false, total_billed_cad: totalBilled,
    billed_party, timestamp: new Date().toISOString(),
    audit_hashes: { coverage: coverageTx.hash, prior_auth: priorAuthTx ? priorAuthTx.hash : null }
  });
});

app.post('/dispense-confirm', (req, res) => {
  const { patient_ref, drug_id, pharmacy_id, province, billed_party } = req.body;
  if (!patient_ref || !drug_id || !pharmacy_id || !province || !billed_party) {
    return res.status(400).json({ error: "Missing required fields: patient_ref, drug_id, pharmacy_id, province, billed_party" });
  }
  const existingDispenses = getTransactionLog({ event_type: 'dispensing_confirmation', province })
    .filter(tx => tx.patient_ref === patient_ref);
  const fraudFlagged = existingDispenses.length > 0;
  const dispenseBilling = generateBillingEvent('dispensing_confirmation', billed_party, `temp-${Date.now()}`);
  const dispenseTx = writeTransaction('dispensing_confirmation', req.body, dispenseBilling);
  let fraudTx = null;
  let totalBilled = 0.10;
  if (fraudFlagged) {
    const fraudBilling = generateBillingEvent('fraud_flag', billed_party, dispenseTx.txId);
    fraudTx = writeTransaction('fraud_flag', req.body, fraudBilling);
    totalBilled += 0.25;
  }
  const writebackBilling = generateBillingEvent('record_writeback', billed_party, dispenseTx.txId);
  const writebackTx = writeTransaction('record_writeback', req.body, writebackBilling);
  totalBilled += 0.10;
  res.json({
    status: fraudFlagged ? "dispensed_flagged" : "dispensed_confirmed",
    patient_ref, drug_id, pharmacy_id, province,
    fraud_flagged: fraudFlagged, duplicate_count: existingDispenses.length,
    dispense_tx: dispenseTx.txId, fraud_tx: fraudTx ? fraudTx.txId : null,
    writeback_tx: writebackTx.txId, total_billed_cad: totalBilled,
    billed_party, timestamp: new Date().toISOString(),
    audit_hashes: { dispense: dispenseTx.hash, fraud: fraudTx ? fraudTx.hash : null, writeback: writebackTx.hash }
  });
});

app.get('/transaction-log', (req, res) => {
  const filters = {};
  if (req.query.province)     filters.province     = req.query.province;
  if (req.query.event_type)   filters.event_type   = req.query.event_type;
  if (req.query.billed_party) filters.billed_party = req.query.billed_party;
  if (req.query.from)         filters.from         = req.query.from;
  if (req.query.to)           filters.to           = req.query.to;
  const log = getTransactionLog(filters);
  res.json({ total: log.length, filters, timestamp: new Date().toISOString(), transactions: log });
});

app.get('/ledger-summary', (req, res) => {
  res.json({ ...getLedgerSummary(), timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Medisyns API running on port ${PORT}`);
  console.log(`Endpoints: POST /verify | POST /authorize | POST /dispense-confirm | GET /transaction-log`);
});