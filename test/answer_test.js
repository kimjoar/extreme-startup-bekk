var answer = require('../lib/answer');

module.exports = {
  'test my name is': function(beforeExit, assert) {
    assert.equal("fred", answer("3fe7b6c0: my name is fred. what is my name", {}));
  },

  'test my name': function(beforeExit, assert) {
    assert.equal("fred", answer("3567d0f0: what is my name", {my_name: "fred"}));
  },

  'test largest': function(beforeExit, assert) {
    assert.equal("751", answer("4ebd29b0: which of the following numbers is the largest: 100, 71, 66, 751"))
    assert.equal("993", answer("711ac940: which of the following numbers is the largest: 27, 993, 98, 599"))
  },

  'test cube': function(beforeExit, assert) {
    assert.equal("", answer("69ffaf60: which of the following numbers is both a square and a cube: 662, 441, 100, 852"))
    assert.equal("64", answer("69ffaf60: which of the following numbers is both a square and a cube: 64, 5"))
  },

  'test multiply': function(beforeExit, assert) {
    assert.equal("35", answer("69e052c0: what is 7 multiplied by 5"));
    assert.equal("0", answer("69e052c0: what is 0 multiplied by 5"));
  },

  'test peseta': function(beforeExit, assert) {
    assert.equal("peseta", answer("afa98aa0: what currency did Spain use before the Euro"));
  },

  'test prime minister': function(beforeExit, assert) {
    assert.equal("david cameron", answer("b5a21850: who is the Prime Minister of Great Britain"));
  },

  'test minus': function(beforeExit, assert) {
    assert.equal("-10", answer("fa5dbbc0: what is 7 minus 17"));
  },

  'test fibonacci': function(beforeExit, assert) {
    assert.equal("2", answer("4e2b6e80: what is the 3th number in the Fibonacci sequence"));
  },

  'test power': function(beforeExit, assert) {
    assert.equal("0", answer("d127cf70: what is 0 to the power of 3"));
    assert.equal("1", answer("d127cf70: what is 2 to the power of 0"));
    assert.equal("8", answer("d127cf70: what is 2 to the power of 3"));
  },

  'test twitter': function(beforeExit, assert) {
    assert.equal("olemartin", answer("4c5c8c10: what is the twitter id of the organizer of this dojo"));
  },

  'test eiffel': function(beforeExit, assert) {
    assert.equal("paris", answer("e64256f0: which city is the Eiffel tower in"));
  },

  'test primes': function(beforeExit, assert) {
    assert.equal("41", answer("251c9190: which of the following numbers are primes: 986, 41"));
  },
  'test multiply plus': function(beforeExit, assert) {
    assert.equal("306", answer("c651fe60: what is 3 plus 15 multiplied by 17"));
  },
  'test plus plus': function(beforeExit, assert) {
    assert.equal("22", answer("c651fe60: what is 13 plus 4 plus 5"));
  },
  'test multiply multiply': function(beforeExit, assert) {
    assert.equal("70", answer("d13445c0: what is 13 multiplied by 5 plus 5"));
  },
};
