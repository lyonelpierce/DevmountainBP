const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

test('returnTwo returns 2', () => {
    expect(returnTwo()).toEqual(2);
  });
  
  test('greeting returns a greeting message with the given name', () => {
    expect(greeting('James')).toEqual('Hello, James.');
    expect(greeting('Jill')).toEqual('Hello, Jill.');
  });
  
  describe('Math functions', () => {
    test('add returns the sum of two numbers', () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(5, 9)).toEqual(14);
    });
  
    test('multiply returns the product of two numbers', () => {
      expect(multiply(2, 3)).toEqual(6);
      expect(multiply(4, 5)).toEqual(20);
    });
  
    test('divide returns the quotient of two numbers', () => {
      expect(divide(6, 3)).toEqual(2);
      expect(divide(10, 2)).toEqual(5);
    });
  
    test('subtract returns the difference of two numbers', () => {
      expect(subtract(5, 2)).toEqual(3);
      expect(subtract(9, 6)).toEqual(3);
    });
  });