var arr = ['Hello','World'];
var diffArr = ['Hello','World','Guys'];

var str = arr.join(' ');            //"Hello World"
var strW = arr.join('w');           //"HellowWorld"
var diffStr = diffArr.join(' ');    //"Hello World Guys"
var diffStrW = diffArr.join('w');   //"HellowWorldwGuys"

console.log(str,strW);
console.log(diffStr,diffStrW);