let string = 'you are dead';
let regex = /(^|\s)\S/g;
function titleCase(str){
  return str.toLowerCase().replace(regex,anyParam => anyParam.toUpperCase());
}

console.log(titleCase(string));