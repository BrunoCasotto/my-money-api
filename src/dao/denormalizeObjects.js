
class DenormalizeObjects {

  /**
   * function to denormalize the transaction object
   * @param {object} transaction undenormalized transaction
   */
  denormalizeTransaction(transaction) {
    try {

      let transactionObj = {
        // _code: transaction._code,
        value: transaction.value.stringValue,
        title: transaction.title.stringValue,
        description: transaction.description.stringValue,
        date: transaction.date.stringValue
      }

      return transactionObj;
    } catch (error) {
      console.error('DenormalizeObjects.denormalizeTransaction', error)
      return {
        error: 'error'
      }
    }
  }
}

module.exports = new DenormalizeObjects();