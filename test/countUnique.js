const countUnique = require('../patterns/multiple_pointers/countUnique')
const expect = require('chai').expect

describe('#countUnique()', () => {
    context('without arguments', () => {
        it('should return []', () => {
            expect(countUnique([])).to.eql([])
        })
    })

    context('with sorted array', () => {
        it('should return [1,2,3,5]', () => {
            expect(countUnique([1,1,1,2,3,3,3,5])).to.eql([1,2,3,5])
        })
    })

    context('with invalid elements in array', () => {
        it('should throw TypeError', () => {
            expect(() => {countUnique(["a", 2,3,5])}).to.throw(TypeError, 'one or more elements of the array are not numeric')
        })
    })
})