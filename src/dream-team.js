const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var firstChar = '';
  var regexp = /[a-zA-z]/;
  if(members instanceof Array) {
    for(var i = 0; i < members.length; i++) {
      if((members[i] instanceof String || typeof members[i] === 'string') && typeof members[i] !== 'object') {
        for(var k = 0; k < members[i].length; k++) {
          if(regexp.test(members[i][k])) {
            firstChar += members[i][k];
            break;
          }
        }
      } else {
        continue;
      }
    }
    return firstChar.toUpperCase().split('').sort().join('');
  } else {
    return false;
  }
};
