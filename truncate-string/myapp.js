function truncateString(str, num) {
    let result;
    if(str.length > num){
      let arrayStr = str.split('');
      arrayStr.splice(num,str.length-num,'...');
      result = arrayStr.join('');
    }else {
      result = str;
    }
    return result;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));