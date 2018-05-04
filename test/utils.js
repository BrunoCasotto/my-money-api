require('module-alias/register')

const chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('@app/index.js')
  , faker = require('faker')
  , url = 'http://localhost:4040'

faker.locale = "pt_BR"
chai.use(chaiHttp);

class TestUtils {

    /**
   * function to make request to the server
   * @param {string} path - path to request
   * @param {object} data - data to send
   */
  postRequest (data) {
    try {
      return chai.request(url)
      .post('/transaction')
      .send(data)
    } catch (error) {
      console.error('TestUtils.request', error)
    }
  }

  closeServer () {
    try {
      app.close();
    } catch (error) {
      console.error('TestUtils.closeServer', error)
    }
  }

  /**
   * function to generate transaction object
   */
  generateTransaction() {
    try {
      return {
        value: faker.finance.amount(),
        title: faker.name.title(),
        description: faker.lorem.paragraph(),
        date: faker.date.past(10, '2010-01-01')
      }
    } catch (error) {
      console.error('TestUtils.generateTransaction', error)
      return {}
    }
  }
}

module.exports = new TestUtils()