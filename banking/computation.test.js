const {
  basicWithdrawal,
  findCustomer,
  users,
  getCurrCheckAmt,
} = require("./computation");
/* use Math.random to get a random user id based on length of users array and return user object with matching id */
const getRandomCustomer = (max) => {
  return Math.floor(Math.random() * max) + 1;
};
const userCount = users.length;
const id = getRandomCustomer(userCount);
const customer = findCustomer(id);

describe("Computation Tests", () => {
  test("should findCustomer() get random user", () => {
    expect(customer).toBeTruthy();
    expect(customer.name).toBeDefined();
    expect(findCustomer(1)).toMatchObject({
      name: "user1",
      id: 1,
      accounts: [
        { name: "sav", currAmt: 1000 },
        { name: "check", currAmt: 2000 },
      ],
    });
  });

  test("should getCurrCheckAmt() get total current checking amount", () => {
    const user = findCustomer(1);
    const result = getCurrCheckAmt(user);
    expect(result).toBe(2000);
  });

  test("should getCurrCheckAmt() return defined and of type number", () => {
    const result = getCurrCheckAmt(customer);
    expect(result).toBeDefined();
    expect(typeof result).toBe("number");
  });

  it("should basicWithdrawal() using customer id return a defined number", () => {
    const customerId = 1;
    const amtToWithdraw = 10;
    const result = basicWithdrawal(customerId, amtToWithdraw);
    expect(typeof result).toBe("number");
    expect(result).toBe(1990);
  });

  it("should basicWithdrawal() return error if withdraw amount is greater than current checking amount", () => {
    const customerId = 1;
    const amtToWithdraw = 10000;
    const result = basicWithdrawal(customerId, amtToWithdraw);
    expect(typeof result).toBe("string");
    expect(result).toBe("Withdraw amount is greater than funds available");
  });
});
