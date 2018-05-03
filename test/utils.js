require('module-alias/register')

const chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('@app/index.js')
  , faker = require('faker');

faker.locale = "pt_BR"
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
    } finally {
      chai.request.agent(app)
    }
  }

    /**
   * function to make request to the server
   * @param {string} path - path to request
   * @param {*} callback - callback with assertions
   */
  postRequest (path='', data={}, callback = (res)=>{} ) {
    try {
      chai.request('http://localhost:4040')
      .post('/transaction')
      .send(data)
      .end((err, res) => {
        //assertions callback here
        callback(err, res)
      })
    } catch (error) {
      console.error('TestUtils.request', error)
    } finally {
      chai.request.agent(app)
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
    } finally {
      chai.request.agent(app)
    }
  }
}

module.exports = new TestUtils()