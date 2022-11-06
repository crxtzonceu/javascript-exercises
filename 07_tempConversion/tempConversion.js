const ftoc = function(fahr) {
  return +((fahr - 32) * 5.0 / 9.0).toFixed(1)
};

const ctof = function(celc) {
  return +(celc * (9.0 / 5.0) + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
