const TransactionDao = require('@dao/transaction')

class TransactionController {

  /**
   * function to return the transaction based on transaction id
   * @param {string} id - transaction id
   */
  getById(request, reply) {
    try {
      return {}
    } catch (error) {
      console.error('TransactionController.getAllByUserName', error)
      return null;
    }
  }
}

module.exports = TransactionController