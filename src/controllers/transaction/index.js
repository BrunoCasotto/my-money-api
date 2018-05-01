const TransactionDao = require('@dao/transaction')

class TransactionController {

  /**
   * function to return the transaction based on transaction id
   * @param {string} id - transaction id
   */
  getById(request, reply) {
    try {
      return {
        title : '',
        double : 0.00,
        description : ''
      }
    } catch (error) {
      console.error('TransactionController.getAllByUserName', error)
      return null;
    }
  }
}

module.exports = TransactionController