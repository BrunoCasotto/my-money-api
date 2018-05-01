require('module-alias/register')

const chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('@app/index.js')

chai.use(chaiHttp);

class TestUtils {

  /**
   * function to make request to the server
   * @param {string} path - path to request
   * @param {*} callback - callback with assertions
   */
  getRequest (path='', callback = (res)=>{} ) {
    try {
      chai.request('http://localhost:4040')
      .get('/transaction')
      .end((err, res) => {
        //assertions callback here
        callback(err, res)
      })
    } catch (error) {
      console.error('TestUtils.request', error)
    }
  }
}

module.exports = new TestUtils()