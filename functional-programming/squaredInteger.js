const squareList = arr => {
    // Only change code below this line
    
    let newArr = arr.filter(arr => arr > 0 && arr.toString().includes('.') === false);
    let result = newArr.map(arr => arr ** 2)
  
    return result;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);