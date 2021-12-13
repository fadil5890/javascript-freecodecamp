function dropElements(arr, func) {
    let newArr = [];
    let firstElem = arr.find(func);
  
    if(firstElem === undefined) return newArr;
    //else
    let indexFE = arr.indexOf(firstElem);
    newArr = arr.slice(indexFE);
    
    console.log(firstElem);
    return newArr;
  }
  
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));

  // [3,9,2] 