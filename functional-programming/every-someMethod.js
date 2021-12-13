var numbers = [1, 5, 8, 0, 10, 11];
var numbersMoreThanTen = [11,84,563,37];


//  every() check if object have at least 1 or more "wrong" values
//  wrong values : [0,-0,null,undefined,NaN,false]

let falseEveryMethod = numbers.every(function(currentValue) {
  return currentValue < 10;
});

let trueEveryMethod = numbers.every(function(currentValue) {
  return currentValue >= 0;
});

//some() check if object have at least 1 or more "!wrong" values

let falseSomeMethod = numbersMoreThanTen.some(function(currentValue) {
  return currentValue < 10;
});

let trueSomeMethod = numbers.some(function(currentValue) {
  return currentValue >= 0;
});

console.log(falseSomeMethod);       //false
console.log(trueSomeMethod);       //true
console.log(falseEveryMethod);       //false
console.log(trueEveryMethod);       //true
