
const binSearch = require('../patterns/searching/binSearch')
const expect = require('chai').expect

describe('#binSearch()', () => {
    context('with array', () => {
        it('should return index', () => {
            expect(binSearch([1, 2, 3, 4, 5, 6], 2)).to.equal(1)
        })
    })

    context('with array', () => {
        it('should return index', () => {
            expect(binSearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37], 35)).to.equal(8)
        })
    })
    context('with array', () => {
        it('should return -1', () => {
            expect(binSearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37], 50)).to.equal(-1)
        })
    })
    context('with array', () => {
        it('should return -1', () => {
            expect(binSearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37], 11)).to.equal(-1)
        })
    })
})
