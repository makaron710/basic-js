const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str : [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    if(value === undefined) {
      this.str.push('( )');
    } else {
      value === null ? this.str.push('( null )') : this.str.push('( ' + value.toString() + ' )');
    }
    return this;
  },
  removeLink(position) {
    if(Object.prototype.toString.call(position) !== '[object Number]' || this.str[position] === undefined) {
      this.str = [];
      throw new Error('THROW')
    }
    this.str.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    var returned = this.str.slice();
    this.str = [];
    return returned.join('~~');   
  }
};

module.exports = chainMaker;
