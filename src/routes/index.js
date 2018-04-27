'use strict'
let TransactionController = require('@controllers/transaction')

let transaction = new TransactionController()

module.exports = [
  {
    method: 'GET',
    path: '/transaction',
    handler: transaction.getById
  },
  {
    method: 'GET',
    path: '/transactions',
    handler: (request, h) => {
      return 'Hello, Transactions!'
    }
  }
]