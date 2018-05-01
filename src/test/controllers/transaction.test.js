require('module-alias/register')

const utils = require('./../utils.js')
  , chai = require('chai')
  , expect = chai.expect

describe('Controller.transaction', () => {

  describe('function getById', () => {
    it('expect status 200', () => {
      utils.getRequest('/transaction', (err, res)=>{
        expect(res).to.have.status(200)
      })
    })
  })

})