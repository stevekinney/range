const chai = require('chai');
const expect = chai.expect;

const range = require('..');

describe('sample_tests', () => {
  it('creates an array of ascending integers from the starting number to the ending number', (done) => {
    expect(range(2, 5)).to.eql([2, 3, 4, 5]);
    done();
  });

  it('creates an array of descending integers if the starting number is greater than the ending number', (done) => {
    expect(range(5, 2)).to.eql([5, 4, 3, 2]);
    done();
  });

  it('starts from zero if only one argument is passed in', (done) => {
    expect(range(3)).to.eql([0, 1, 2, 3]);
    done();
  });
});
