const { addTwoNums, addThreeNums, addABunchOfNums } = require("./basic-add");

describe("should return total value of nums", () => {
  test("should return 5", () => {
    expect(addTwoNums(2, 3)).toBe(5);
  });

  test("should return 10", () => {
    expect(addThreeNums(6, 3, 1)).toBe(10);
  });

  test("should return 30", () => {
    expect(addABunchOfNums(3, 7, 5, 15, 0)).toBe(30);
  });
});
