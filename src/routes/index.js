'use strict'
let TransactionController = require('@controllers/transaction')

let transaction = new TransactionController()

module.exports = [
  { method: 'GET', path: '/transaction', handler: transaction.getById },
  { method: 'POST', path: '/transaction', handler: transaction.create }
]