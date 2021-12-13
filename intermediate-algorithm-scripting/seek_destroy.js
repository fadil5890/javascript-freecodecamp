function destroyer(arr, ...other) {
    let newArr = arr.slice();
    let filteredArr = newArr.filter( elem => other.indexOf(elem) < 0)
  
    return filteredArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))