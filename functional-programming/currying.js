function unCurried(x, y) {
    return x + y;
  }
  
  function curried(x) {
    return function(y) {
      return x + y;
    }
  }
  
  console.log(curried(2)(2));

//examples

function addTogether(num1) {
  if(Object.values(arguments).every( args => typeof args === 'number') === false) return undefined;
  
  if(arguments.length > 1){
    return arguments[0] + arguments[1];
  } else {
      return function onlyOne(num2) {
        if(Object.values(arguments).every( args => typeof args === 'number') === false) return undefined;
        return num1 + num2;
    }
  }
    
}

console.log(addTogether(5)(7));
// 12