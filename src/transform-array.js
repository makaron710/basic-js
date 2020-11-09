const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!arr && Object.prototype.toString.call(arr) != '[object Array]'){throw new Error('THROW')}

  var newArr = arr.slice(); // В JS При все присвоения объектов реализуются через ссылки на оригинал. Чтобы скопировать Массив (остальное - хз), можно использовать метод slice без аргументов.
  for(var i = 0; i < newArr.length; i++) {
    switch(newArr[i]) {
      case '--discard-next':
        if(newArr[i+1] != undefined) {
          delete newArr[i];
          delete newArr[i+1];
          break;
        } else {
          delete newArr[i];
          break;
        }      
      case '--discard-prev':
        if(newArr[i-1] != undefined) {
          delete newArr[i];
          delete newArr[i-1];
          break;
        } else {
          delete newArr[i];
          break;
        }      
      case '--double-next':
        if(newArr[i+1] != undefined) {
          newArr[i] = newArr[i+1];
          break;
        } else {
          delete newArr[i];
          break;
        }      
      case '--double-prev':
        if(newArr[i-1] != undefined) {
          newArr[i] = newArr[i-1];
          break;
        } else {
          delete newArr[i];
          break;
        }      
      default:
        continue;
    }
  }
  for(var i = 0; i < newArr.length; i++){
    if(newArr[i] == undefined) {
     newArr.splice(i, 1)
     i--;
    }
  }
  return newArr;
};
