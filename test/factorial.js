
const factorial = require('../patterns/recursion/factorial.js')
const expect = require('chai').expect

describe('#factorial()', () => {
    context('with valid number', () => {
        it('should return number', () => {
            expect(factorial(5)).to.equal(120)
        })
    })
})