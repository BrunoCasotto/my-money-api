'use strict'
let TransactionController = require('@controllers/transaction')

let transaction = new TransactionController()

module.exports = [
  { method: 'GET', path: '/transaction', handler: transaction.getById },
  { method: 'PUT', path: '/transaction', handler: transaction.update },
  { method: 'POST', path: '/transaction', handler: transaction.create },
  { method: 'DELETE', path: '/transaction', handler: transaction.remove }
]