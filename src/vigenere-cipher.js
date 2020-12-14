const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(straight) {
    this.straight = straight;
  }

  encrypt(string, key) {
    var keyString = key.repeat(Math.ceil(string.length / key.length)).toUpperCase();
    var newString = string.toUpperCase().split("");
    for(let i = 0, j = 0; i < string.length; i++, j++) {
      if(/[A-Z]/.test(newString[i])) {
        newString[i] = String.fromCharCode(((((newString[i].charCodeAt()) + (keyString[j].charCodeAt())) - 130) % 26) + 65);
      } else {
        j--;
      }
    }
    if(this.straight != false) {
      return newString.join("");
    } else {
      return newString.reverse().join("");
    }
  }    
  decrypt(string, key) {
    var keyString = key.repeat(Math.ceil(string.length / key.length)).toUpperCase();
    var newString = string.toUpperCase().split("");
    for(let i = 0, j = 0; i < string.length; i++, j++) {
      if(/[A-Z]/.test(newString[i])) {
        newString[i] = String.fromCharCode(((((newString[i].charCodeAt() - 65) - (keyString[j].charCodeAt() - 65)) + 26) % 26) + 65)
      } else {
        j--;
      }
    }
    if(this.straight != false) {
      return newString.join("");
    } else {
      return newString.reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
