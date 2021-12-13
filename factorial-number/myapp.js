function factorialize(num) {
  
    if(num > 0){
      for(let i = num - 1 ; i > 0;i--){
        num *= i;
      }
    }
    else if(num === 0){
      num += 1;
    }else {
      num = undefined;
    }
    
    return num;
  
  }
  
  console.log(factorialize(0));