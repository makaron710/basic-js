const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var depth = 1;
    arr = arr.filter(e => Object.prototype.toString.call(e) === '[object Array]');
    if(arr.length === 0) {
      return depth
    } else {
      while(arr.length > 0) {
        arr = arr.flat();
        arr = arr.filter(e => Object.prototype.toString.call(e) === '[object Array]');
        return depth = this.calculateDepth(arr) + 1;
      }
    }    
  }
};