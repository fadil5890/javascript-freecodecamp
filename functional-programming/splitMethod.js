var str = 'Hellow World';
var strSplit = str.split(/w/);      //['Hello', ' World']
var strSplitIgnoreCase = str.split(/w/i);     //['Hello', ' ', 'orld']


console.log(strSplit);

//FYI
/* \W = nonWordCharacters: "./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?-" 
   \w = wordCharacters: "[a-z], [A-Z], [0-9], '_'"
*/

function urlSlug(title) {
    let titleSplit = title.toLowerCase().trim().split(/\s+/);
    let titleJoin = titleSplit.join('-')
    return titleJoin;
  }

console.log(urlSlug('  Javascript   Lore  '))   //"javascript-lore"
  