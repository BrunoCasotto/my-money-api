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
  postRequest (path, data) {
    try {
      return chai.request(url)
      .post(path)
      .send(data)
    } catch (error) {
      console.error('TestUtils.request', error)
    }
  }

      /**
   * function to make request to the server
   * @param {string} path - path to request
   * @param {object} query - query to get
   */
  getRequest (path, query) {
    try {
      return chai.request(url)
      .get(path)
      .query(query)
    } catch (error) {
      console.error('TestUtils.request', error)
    }
  }

  /**
   * function to make request to the server
   * @param {string} path - path to request
   * @param {object} data - data to send
   */
  putRequest (path, data) {
    try {
      return chai.request(url)
      .put(path)
      .send(data)
    } catch (error) {
      console.error('TestUtils.request', error)
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

    /**
   * function to make request to the server
   * @param {string} path - path to request
   * @param {object} query - query to send
   */
  deleteRequest(path, query) {
    try {
      return chai.request(url)
      .del(path)
      .query(query)
    } catch (error) {
      console.error('TestUtils.request', error)
    }
  }
}

module.exports = new TestUtils()