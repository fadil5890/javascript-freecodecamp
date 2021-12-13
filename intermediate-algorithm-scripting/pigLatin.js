
// var consonant = B, C, D, F, G, J, K, L, M, N, P, Q, S, T, V, X, Z and often H, R, W, Y
// var vowel = A,I,U,E,O

function translatePigLatin(str) {
    let regexVowel = /^[aiueo]+/i
    let regexConsonant = /^[^aiueo]+/i
    let regexBoth = /^[aiueo]+|^[^aiueo]+/i
  
    
    if(str.match(regexConsonant) !== null){
      return str.replace(str.match(regexConsonant),'')
      .concat(`${str.match(regexConsonant)}ay`)
    } else {
      return str.concat('way');
    }
  
  }

console.log(translatePigLatin("rhythm"));       //rhythmay
console.log(translatePigLatin("schwartz"));     //artzschway
console.log(translatePigLatin("eight"));        //eightway
console.log(translatePigLatin("algorithm"));    //algorithmway
console.log(translatePigLatin("glove"));        //oveglay
console.log(translatePigLatin("paragraphs"));   //aragraphspay