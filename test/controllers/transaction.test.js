require('module-alias/register')

const utils = require('./../utils.js')
  , chai = require('chai')
  , expect = chai.expect
  , chaiDateTime = require('chai-datetime')

chai.use(chaiDateTime)

describe('Controller.transaction', () => {

  describe('* function getById', () => {
    it('expect status 200', () => {
      utils.getRequest('/transaction', (err, res)=>{
        expect(res).to.have.status(200)
      })
    })
  })

  /**
   * test function create
   */
  describe('* function create', () => {

    it('expect status 200', () => {
      utils.postRequest('/transaction', utils.generateTransaction(), (err, res)=>{
        expect(res).to.have.status(200)
      })
    })

    it('expect a transaction object return', () => {
      utils.postRequest('/transaction', utils.generateTransaction(), (err, res)=>{
        expect(res.body).to.be.an('object')
      })
    })


    it('expect a transaction object properties return', () => {
      let transaction = utils.generateTransaction();

      utils.postRequest('/transaction', transaction, (err, res)=>{
        expect(res.body).to.have.property('title')
        expect(res.body.title).to.be.equals(transaction.title)

        expect(res.body).to.have.property('date')
        expect(new Date(res.body.date)).to.equalDate(new Date(transaction.date))

        expect(res.body).to.have.property('value')
        expect(res.body.value).to.be.equals(transaction.value)

        expect(res.body).to.have.property('description')
        expect(res.body.description).to.be.equals(transaction.description)
      })
    })

  })

})