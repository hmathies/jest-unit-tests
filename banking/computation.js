const findCustomer = (id) => {
  // TODO: declare const using filter
  return users.find((person) => person.id === id);
};
// const basicWithdrawal = (user, amt) => {
//   users.find((person) => {
//     person.name === user ? });
//   return a - b;
// };
const getCurrCheckAmt = (user) => {
  for (const [key, value] of Object.entries(user)) {
    if (key === "accounts") {
      return value
        .filter((acct) => acct.name === "check")
        .map((acct) => acct.currAmt)
        .reduce((a, acct) => acct.currAmt);
    }
  }
};

const users = [
  {
    name: "user1",
    id: 1,
    accounts: [
      { name: "sav", currAmt: 1000 },
      { name: "check", currAmt: 2000 },
    ],
  },
  {
    name: "user2",
    id: 2,
    accounts: [
      { name: "sav", currAmt: 500 },
      { name: "check", currAmt: 4900 },
    ],
  },
];

module.exports = {
  // basicWithdrawal,
  findCustomer,
  users,
  getCurrCheckAmt,
};
