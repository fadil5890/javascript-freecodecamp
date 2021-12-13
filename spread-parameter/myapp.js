var arr = [6, 89, 3, 45];
var maximus0 = Math.max.apply(null,arr);

//alternative with spread parameter
var maximus = Math.max(...arr);
console.log(maximus);