const roundDown = (a, b) => {
  return Math.floor(a + b);
};

const roundUp = (a, b) => {
  return Math.ceil(a + b);
};

const roundUp2 = (a, b) => {
  return Math.round(a + b);
};

module.exports = {
  roundDown,
  roundUp,
  roundUp2,
};
