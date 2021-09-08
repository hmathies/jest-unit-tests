const addTwoNums = (a, b) => {
  return a + b;
};

const addThreeNums = (a, b, c) => {
  return a + b + c;
};
const addABunchOfNums = (a, b, c, d, e) => {
  return addTwoNums(a, b) + addThreeNums(c, d, e);
};

module.exports = {
  addTwoNums,
  addThreeNums,
  addABunchOfNums,
};
