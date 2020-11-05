const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) {return 'Unable to determine the time of year!'}

  if(Object.prototype.toString.call(date) === '[object Date]') {
    const monthsStr = {
      0 : "winter",
      1 : "winter",
      2 : "spring",
      3 : "spring",
      4 : "spring",
      5 : "summer",
      6 : "summer",
      7 : "summer",
      8 : "autumn",
      9 : "autumn",
      10 : "autumn",
      11 : "winter",
    }
    var mothNum = date.getMonth();  
    return monthsStr[mothNum];
  }
  
  throw new Error();
};
