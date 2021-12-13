function confirmEnding(str, target) {
    let regex = new RegExp (target + '$');
    let result = regex.test(str);
    return result;
  }
  
  console.log(confirmEnding("Bastian", "n"));