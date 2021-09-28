const {
  roundDown,
  roundUp,
  roundUp2,
  absValue,
  mathTrunc,
  addDecimals,
  addDecmialsToFixed,
} = require("./decimals");

const { addTwoNums } = require("./basic-add");

describe("should round down", () => {
  test("should round down to 0 using Math.floor", () => {
    expect(roundDown(0.1, 0.2)).toBe(0);
  });

  test("should return the integer part of the number by removing fractional digits", () => {
    expect(mathTrunc(43.23)).toEqual(43);
  });

  test("should add two decimals and return integer only", () => {
    const num = addTwoNums(1.2, 1.3);
    expect(mathTrunc(num)).toEqual(2);
    expect(num).toBeLessThan(3);
  });
});

describe("should round Up", () => {
  test("should round up to 1", () => {
    expect(roundUp(0.3, 0.2)).toBe(1);
  });

  test("should round up to 1", () => {
    expect(roundUp2(0.3, 0.2)).toBe(1);
  });
});

describe("should return absolute value", () => {
  test("should return a postive number", () => {
    expect(absValue(2.789, -3.457)).toBe(2.789);
  });

  test("should return 1", () => {
    let param1 = roundDown(0.1, 0.2);
    let param2 = roundUp(0.3, 0.2);
    let result = absValue(param1 - param2);
    expect(result).toBe(1);
  });

  describe('should compute two decimals and return a decimal value', () => {
    test('should add two decimals and returning floating number', () => {
      let a = '0.2';
      let b = '0.3';
      
      expect(addDecimals(a, b)).toBe(0.5)

    });

    test('should toFixed return  a string and rounds as necessary', () => {
      let a = '0.3456';
      let b = '0.48899';
      expect(addDecmialsToFixed(a,b)).toBe('0.83')
    })
  })
});
