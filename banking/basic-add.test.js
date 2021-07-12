const { addTwoNums } = require('./basic-add');

describe('should return total value of nums', () => {
  test('should return 5', () => {
    expect(addTwoNums(2, 3)).toBe(5);
  })
})