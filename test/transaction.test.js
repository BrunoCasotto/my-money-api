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
  }).timeout(8000)

  it('expect a transaction object property title', async () => {
    result = await utils.postRequest('/transaction', transaction)
    expect(result.body).to.have.property('title')
    expect(result.body.title).to.be.equals(transaction.title)
  }).timeout(8000)

  it('expect a transaction object property date', async () => {
    result = await utils.postRequest('/transaction', transaction)
    expect(result.body).to.have.property('date')
    expect(new Date(result.body.date)).to.equalDate(new Date(transaction.date))
  }).timeout(8000)

  it('expect a transaction object property value', async () => {
    result = await utils.postRequest('/transaction', transaction)
    expect(result.body).to.have.property('value')
    expect(result.body.value).to.be.equals(transaction.value)
  }).timeout(8000)

  it('expect a transaction object property description', async () => {
    let result = await utils.postRequest('/transaction', transaction)
    expect(result.body).to.have.property('description')
    expect(result.body.description).to.be.equals(transaction.description)
  }).timeout(8000)

})

describe('[Controller.transaction] function getById', () => {
  let transaction = utils.generateTransaction()
  let result = null

  it('expect status 200', async () => {
    result = await utils.getRequest('/transaction', {})
    expect(result).to.have.status(200)
  }).timeout(8000)

  it('expect title property into result', async () => {
    let res = await utils.postRequest('/transaction', transaction)
    result = await utils.getRequest('/transaction', {id: res.body._code})

    expect(result.body).to.have.property('title')
    expect(result.body.title).to.be.equals(transaction.title)
  }).timeout(8000)

  it('expect date property into result', async () => {
    let res = await utils.postRequest('/transaction', transaction)
    result = await utils.getRequest('/transaction', {id: res.body._code})

    expect(result.body).to.have.property('date')
    expect(new Date(result.body.date)).to.equalDate(new Date(transaction.date))
  }).timeout(8000)

  it('expect value property into result', async () => {
    let res = await utils.postRequest('/transaction', transaction)
    result = await utils.getRequest('/transaction', {id: res.body._code})

    expect(result.body).to.have.property('value')
    expect(result.body.value).to.be.equals(transaction.value)
  }).timeout(8000)

  it('expect description property into result', async () => {
    let res = await utils.postRequest('/transaction', transaction)
    result = await utils.getRequest('/transaction', {id: res.body._code})

    expect(result.body).to.have.property('description')
    expect(result.body.description).to.be.equals(transaction.description)
  }).timeout(8000)

  it('expect error not found', async () => {
    result = await utils.getRequest('/transaction', {id: 'error_expect'})
    expect(result.body).to.have.property('error')
    expect(result.body.error).to.be.equals('not.found')
  }).timeout(8000)
})

describe('[Controller.transaction] function update', () => {
  let transaction = utils.generateTransaction()
  let newObj = utils.generateTransaction()
  let result = null

  it('expect status 200', async () => {
    let res = await utils.postRequest('/transaction', transaction)
    newObj._code = res._code
    result = await utils.putRequest('/transaction', newObj)

    expect(result).to.have.status(200)
  }).timeout(8000)

  it('expect title property into result', async () => {
    let res = await utils.postRequest('/transaction', transaction)
    newObj._code = res.body._code

    result = await utils.putRequest('/transaction', newObj)

    expect(result.body).to.have.property('title')
    expect(result.body.title).to.be.equals(newObj.title)
  }).timeout(8000)

  it('expect description property into result', async () => {
    let res = await utils.postRequest('/transaction', transaction)
    newObj._code = res.body._code

    result = await utils.putRequest('/transaction', newObj)

    expect(result.body).to.have.property('description')
    expect(result.body.description).to.be.equals(newObj.description)
  }).timeout(8000)

  it('expect value property into result', async () => {
    let res = await utils.postRequest('/transaction', transaction)
    newObj._code = res.body._code

    result = await utils.putRequest('/transaction', newObj)

    expect(result.body).to.have.property('value')
    expect(result.body.value).to.be.equals(newObj.value)
  }).timeout(8000)

  it('expect date property into result', async () => {
    let res = await utils.postRequest('/transaction', transaction)
    newObj._code = res.body._code

    result = await utils.putRequest('/transaction', newObj)

    expect(result.body).to.have.property('date')
    expect(new Date(result.body.date)).to.equalDate(new Date(newObj.date))
  }).timeout(8000)
})