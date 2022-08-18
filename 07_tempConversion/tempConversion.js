const ftoc = function(tempy1) {
  newTempy1 = (tempy1 - 32) * (5/9);
  return Math.round(newTempy1 * 10) / 10;
};

const ctof = function(tempy2) {
  newTempy2 = tempy2 * (9/5) + 32;
  return Math.round(newTempy2 * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
