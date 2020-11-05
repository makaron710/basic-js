const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var turns = Math.pow(2, disksNumber) - 1;
  var seconds = Math.floor(3600 / turnsSpeed * turns);
  var result = {
    'turns' : turns,
    'seconds' : seconds,
  }
  return result;
};
