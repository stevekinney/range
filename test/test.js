const chai = require('chai');
const expect = chai.expect;

const range = require('..');

describe('sample_tests', () => {
  it('creates an array of ascending integers from the starting number to the ending number', () => {
    expect(range(2, 5)).to.eql([2, 3, 4, 5]);
  });

  it('creates an array of descending integers if the starting number is greater than the ending number', () => {
    expect(range(5, 2)).to.eql([5, 4, 3, 2]);
  });

  it('starts from zero if only one argument is passed in', () => {
    expect(range(3)).to.eql([0, 1, 2, 3]);
  });
});
