function findElement(arr, func) {
    let numResult = [];
    for(let i=0; i < arr.length; i++){
      if(func(arr[i]) === true){
        numResult.push(arr[i]);
      }
    }
    if(numResult.length === 0){
        numResult = undefined;
    }
    return numResult;
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
