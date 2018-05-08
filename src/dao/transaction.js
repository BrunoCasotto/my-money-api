
const DatabaseService = require('@services/database')
  , denormalize = require('@dao/denormalizeObjects')

let dbService = new DatabaseService()

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
  async save(transaction) {
    try {
      let dbReference = this.db.collection('transactions')
      let dbResult = await dbReference.add(transaction)

      let result = Object.assign({}, transaction, {_code: dbResult._referencePath.segments[1]})
      return result
    } catch (error) {
      console.error('TransactionDao.save', error)
    }
  }

    /**
   * function to update the especific transaction
   * @param {object} transaction transaction object
   */
  async update(transaction) {
    try {
      if(!transaction._code) return {}

      let dbReference = this.db.collection('transactions').doc(transaction._code)
      let dbResult = await dbReference.set(transaction)

      return transaction;
    } catch (error) {
      console.error('TransactionDao.update', error)
    }
  }

    /**
   * function to remove the especific transaction
   * @param {object} transaction - transaction object
   */
  async remove(id) {
    try {
      if(!id) return { error: 'not.id'}

      let dbReference = this.db.collection('transactions').doc(id)
      return await dbReference.delete()
    } catch (error) {
      console.error('TransactionDao.remove', error)
    }
  }

  /**
   * function to get the document
   * @param {string} id id
   */
  async getById(id) {
    try {
      if(!id) return {}

      let dbReference = this.db.collection('transactions').doc(id)
      let dbResult = await dbReference.get()

      if(!dbResult._fieldsProto) return {
        error: 'not.found'
      }

      let result = Object.assign({}, dbResult._fieldsProto, {_code: id})
      return denormalize.denormalizeTransaction(result)
    } catch (error) {
      console.error('TransactionDao.remove', error)
    }
  }
}

module.exports = TransactionDao
