const { roundDown, roundUp, roundUp2 } = require("./decimals");

describe("should round Down", () => {
  test("should round down to 0", () => {
    expect(roundDown(0.1, 0.2)).toBe(0);
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
