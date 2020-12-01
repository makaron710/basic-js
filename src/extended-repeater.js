const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {

  if(str === undefined) {throw new Error('THROW')}
  str = str === null ? 'null' : str.toString();

  options.repeatTimes =  typeof options.repeatTimes !== 'undefined' ? options.repeatTimes : 1;
  options.separator =  typeof options.separator !== 'undefined' ? options.separator : '+';
  options.additionRepeatTimes =  typeof options.additionRepeatTimes !== 'undefined' ? options.additionRepeatTimes : 1;
  options.additionSeparator =  typeof options.additionSeparator !== 'undefined' ? options.additionSeparator : '|';
  if(typeof options.addition !== 'undefined') {
    if(options.addition == null) {
      options.addition = 'null'
    } else {
      options.addition = options.addition.toString()
    } 
  }
  /* typeof options.addition !== 'undefined' ? options.addition.toString() : false; */

  var additionArr = [];
  var strArr = [];
  var additionRes = '';
  var strRes = '';
  for(let i = 0; i < options.additionRepeatTimes; i++) {
    additionArr[i] = options.addition;
  }
  additionRes = additionArr.join(options.additionSeparator);

  for(let i = 0; i < options.repeatTimes; i++) {
    strArr[i] = str + additionRes;
  }
  strRes = strArr.join(options.separator);
  return strRes;
};
  