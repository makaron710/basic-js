const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var count = 0;
  for(var i = 0; i < matrix.length; i++) {
    for(var k = 0; k < matrix[i].length; k++) {
      matrix[i][k] == '^^' ? count += 1 : false;
    }
  }
  return count;
};
