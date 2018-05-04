require('module-alias/register')

const utils = require('./utils.js')
  , chai = require('chai')
  , expect = chai.expect
  , chaiDateTime = require('chai-datetime')

chai.use(chaiDateTime)


describe('[Controller.transaction] function create', () => {
  let transaction = utils.generateTransaction()
  let result = null

  it('expect status 200', async () => {
    result = await utils.postRequest('/transaction', transaction)
    expect(result).to.have.status(200)
  })

  it('expect a transaction type object', async () => {
    result = await utils.postRequest('/transaction', transaction)
    expect(result.body).to.be.an('object')
  })

  it('expect a transaction object property title', async () => {
    result = await utils.postRequest('/transaction', transaction)
    expect(result.body).to.have.property('title')
    expect(result.body.title).to.be.equals(transaction.title)
  })

  it('expect a transaction object property date', async () => {
    result = await utils.postRequest('/transaction', transaction)
    expect(result.body).to.have.property('date')
    expect(new Date(result.body.date)).to.equalDate(new Date(transaction.date))
  })

  it('expect a transaction object property value', async () => {
    result = await utils.postRequest('/transaction', transaction)
    expect(result.body).to.have.property('value')
    expect(result.body.value).to.be.equals(transaction.value)
  })

  it('expect a transaction object property description', async () => {
    let result = await utils.postRequest('/transaction', transaction)
    expect(result.body).to.have.property('description')
    expect(result.body.description).to.be.equals(transaction.description)
  })

})

describe('[Controller.transaction] function getById', () => {
  let transaction = utils.generateTransaction()
  let result = null

  it('expect status 200', async () => {
    result = await utils.postRequest('/transaction', transaction)
    expect(result).to.have.status(200)
  })
})
