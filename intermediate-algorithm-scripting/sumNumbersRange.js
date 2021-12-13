let reducer = (accumulator, currentValue) => {
    for(let i = accumulator + 1; i < currentValue;i++){
      accumulator += i;
    }
    return accumulator + currentValue;
  };
  
  function sumAll(arr) {
    arr.sort( (a, b) => a - b);
    let result = arr.reduce(reducer)
    return result;
  };
  
  console.log(sumAll([10, 5]));