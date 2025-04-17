// models/Transaction.js
const mongoose = require('mongoose');


// Transaction Schema
const transactionSchema = new mongoose.Schema({
  purchase: { type: String,default: "Data" },
  service: { type: Number, required: true, default: "MTN" || "GOTV" },
  plan: { type: String, required: true, default: "1GB SME Data" },
  price: { type: Number, required: true, default: 280 },
  recipient: { type: Number,default:08066715587 },
  type: { type: String, enum: ['credit', 'debit'], default: "debit", required: true },
  description: { type: String, default: "Purchase of 1GB data Successful" },
 payment_method: { type: String, enum: ['cash', 'credit_card', 'bank_transfer', 'crypto','debit','wallet_balance'], required: true }, // Mode of transaction
 status: { type: String, enum: ['Pending', 'Successful', 'Failed'], required: true, default: 'pending' }, // Transaction status
  date: { type: Date, required: true, default: Date.now }, // Date of the transaction
  time: { type: String, required: true, default: () => new Date().toLocaleTimeString() }, // Time of the transaction
});

module.exports = mongoose.model('Transaction', transactionSchema);
