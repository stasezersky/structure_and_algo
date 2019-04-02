var anagram = require('../patterns/freq_counter/anagram');
var expect = require('chai').expect;
// console.log(anagram("stas", "tas"))

describe('#anagram()', function() {

  context('without arguments', function() {
    it('should return true', function() {
      expect(anagram('','')).to.equal(true)
    })
  })

  context('with true arguments', function() {
    it('should return true', function() {
      expect(anagram('anagram', 'aanrgam')).to.equal(true)
    })
  })

  context('with false arguments', function() {
    it('should return false', function() {
      expect(anagram('stas', 'blah')).to.equal(false)
    })
  })

  context('with invalid arguments', function() {
    it('should return true', function() {
      expect(anagram(1,2)).to.equal(false)
    })
  })
})