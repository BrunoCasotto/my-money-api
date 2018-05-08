const admin = require('firebase-admin')
let serviceAccount = require('./database.config.json')
let serviceAccountTest = require('./test.database.config.json')

admin.initializeApp({
  credential: admin.credential.cert(
    (process.env.NODE_ENV === 'test') ? serviceAccountTest : serviceAccount
  )
});

class DataBaseService {
  /**
   * function to initialize the firestone to context
   */
  constructor() {
    this.db = admin.firestore()
  }

  /**
   * function to return the database instance
   * @return {function} - firestore instance
   */
  getDataBase() {
    try {
      return this.db;
    } catch (error) {
      console.error('DataBaseService.getDatabase', error)
    }
  }
}

module.exports = DataBaseService
