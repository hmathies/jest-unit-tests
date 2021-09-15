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
describe("Withdrawal", () => {
  test("should get random user", () => {
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

  test("should get total current checking amount", () => {
    const user = findCustomer(1);
    const result = getCurrCheckAmt(user);
    expect(result).toBe(2000);
  });
});
