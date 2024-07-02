const { expect } = require('chai');
const { divide, square, add } = require('../index.js');

describe('index.js', () => {
  describe('has a function expression called divide', () => {
    it('divide divides 2000 by 100', () => {
      expect(divide(2000, 100)).to.equal(20);
    });
  });

  describe('has an arrow function called square', () => {
    it('square arrow function takes one parameter and multiplies it times itself', () => {
      expect(square(5)).to.equal(25);
    });
  });

  describe('has an arrow function called add', () => {
    it('add arrow function takes two parameters and adds them together', () => {
      expect(add(2, 3)).to.equal(5);
    });
  });
});
