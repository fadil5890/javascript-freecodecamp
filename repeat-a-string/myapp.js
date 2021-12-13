function repeatStringNumTimes(str, num) {
    let string = '';
    if(num >= 0){
      for(let i=0; i < num; i++){
        string += str;
      }
    }
    return string;
  }
  
  console.log(repeatStringNumTimes("$", 3));