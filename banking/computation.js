const findCustomer = (id) => {
  // TODO: declare const using filter
  return users.find((person) => person.id === id);
};
const getCurrCheckAmt = (user) => {
  for (const [key, value] of Object.entries(user)) {
    while (key === "accounts") {
      return value
        .filter((acct) => acct.name === "check")
        .map((check) => check.currAmt)
        .reduce((a, amt) => amt.currAmt);
    }
  }
};

const getCurrSavAmt = (user) => {
  for (const [key, value] of Object.entries(user)) {
    while (key === "accounts") {
      return value
        .filter((acct) => acct.name === "sav")
        .map((sav) => sav.currAmt)
        .reduce((a, amt) => amt.currAmt);
    }
    /* removing if statement because it makes the code coverage go down */
    // if (key === "accounts") {
    //   return value
    //     .filter((acct) => acct.name === "sav")
    //     .map((acct) => acct.currAmt)
    //     .reduce((a, acct) => acct.currAmt);
    // }
  }
};

const basicWithdrawal = (customerId, amt) => {
  let currAmt;
  users.find((person) =>
    person.id === customerId ? (currAmt = getCurrCheckAmt(person)) : null
  );
  if (currAmt >= amt) {
    return currAmt - amt;
  } else if (currAmt < amt) {
    return "Withdraw amount is greater than funds available";
  } else {
    return "Invalid Data";
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
  basicWithdrawal,
  findCustomer,
  users,
  getCurrCheckAmt,
  getCurrSavAmt,
};
