
const DatabaseService = require('@services/database')
let dbService = new DatabaseService();

class TransactionDao {
  /**
   * constructor to initialize the database service to context
   */
  constructor() {
    try {
      this.db = dbService.getDataBase();
    } catch (error) {
      console.error('TransactionDao.constructor', error)
    }
  }

  /**
   * function to save the especific transaction
   * @param {object} transaction transaction object
   * @return {object} transaction object
   */
  save(transaction) {
    try {
      let dbReference = this.db.collection('transactions').doc('collection1')
      let dbResult = dbReference.set(transaction)

      return dbResult;
    } catch (error) {
      console.error('TransactionDao.save', error)
    }
  }

    /**
   * function to update the especific transaction
   * @param {object} transaction transaction object
   */
  update(transaction) {
    try {
      //code here
    } catch (error) {
      console.error('TransactionDao.update', error)
    }
  }

    /**
   * function to remove the especific transaction
   * @param {object} transaction - transaction object
   */
  remove(transaction) {
    try {
      //code here
    } catch (error) {
      console.error('TransactionDao.remove', error)
    }
  }
}

module.exports = TransactionDao
