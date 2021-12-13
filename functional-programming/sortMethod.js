
var arrStr = ['Apple','Canana','Boconut','Delima','Acarrot'];
var arrNum = [4,8,2,62,78];




//--------Ascending Numbers---------
let sortAscendNumbers = function (a, b) {
    return a - b;
  } 

//--------Descending Numbers---------
let sortDescendNumbers = function (a, b) {
    return b - a;
  }

//--------Alphabetical String---------
let non_ASCII = function (a, b) {
    return a.localeCompare(b);
}

console.log(arrNum.sort(sortAscendNumbers));
console.log(arrNum.sort(sortDescendNumbers));
console.log(arrStr.sort(non_ASCII));
