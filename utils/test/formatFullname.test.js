const expect = require('chai').expect;
const formatFullname = require('../formatFullname.js');

describe('FormatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" arg format is different from <firstname> <lastname>', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });

  it('should return good format of "fullName" arg if proper args', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JoHN DoE')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('John Doe')).to.equal('John Doe');
  });

});