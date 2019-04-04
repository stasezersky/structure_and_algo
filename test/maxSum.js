
const maxSum = require('../patterns/sliding_window/maxSum')
const expect = require('chai').expect

describe('#maxSum()', () => {
    context('with empty array', () => {
        it('should return null', () => {
            expect(maxSum([], 3)).to.equal(null)
        })
    })

    context('with num larger than arr.length', () => {
        it('should return null', () => {
            expect(maxSum([1, 1, 1], 5)).to.equal(null)
        })
    })

    context('with valid array and num', () => {
        it('should return 7', () => {
            expect(maxSum([1, 2, 2, 2, 4, 3, 2, 2, 2], 2)).to.equal(7)
        })
    })

    context('with valid array and num2', () => {
        it('should return 14', () => {
            expect(maxSum([12, 2, 5, 5, 5, 5, 5], 2)).to.equal(14)
        })
    })

    context('with valid array and num3', () => {
        it('should return 12', () => {
            expect(maxSum([12, 2, 5, 5, 5, 5, 5], 1)).to.equal(12)
        })
    })
})