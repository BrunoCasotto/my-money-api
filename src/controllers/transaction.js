const TransactionDao = require('@dao/transaction')

class TransactionController {

  /**
   * function to return the transaction based on transaction id
   * @param {string} id - transaction id
   */
  getById(request, reply) {
    let transactionDao = new TransactionDao()

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

  /**
   * function to create the transaction
   * @param {object} request
   * @param {object} reply
   */
  create(request, reply) {
    try {
      //code here
    } catch (error) {
      console.error('TransactionController.create', error)
    }
  }
}

module.exports = TransactionController