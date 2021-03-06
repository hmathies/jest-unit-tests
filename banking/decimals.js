const roundDown = (a, b) => {
  return Math.floor(a + b);
};

const roundUp = (a, b) => {
  return Math.ceil(a + b);
};

const roundUp2 = (a, b) => {
  return Math.round(a + b);
};

const absValue = (a, b) => {
  return Math.abs(a, b);
};
const mathTrunc = (a) => {
  return Math.trunc(a);
};

const addDecimals = (a, b) => {
  return parseFloat(a) + parseFloat(b);
};

const addDecmialsToFixed = (a, b) => {
  return (parseFloat(a) + parseFloat(b)).toFixed(2);
};
module.exports = {
  roundDown,
  roundUp,
  roundUp2,
  absValue,
  mathTrunc,
  addDecimals,
  addDecmialsToFixed,
};
