function uniteUnique(...arr) {
    let newArr = arr.slice().flat();
    let resultArr = [];
    for(let i = 0; i < newArr.length; i++){
      if(resultArr.indexOf(newArr[i]) < 0){
        resultArr.push(newArr[i]);
      }
    }
    return resultArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// ES6 version

function uniteUniqueES6(...arr) {
    return [...new Set(arr.flat())]
  }

console.log(uniteUniqueES6([1, 3, 2], [5, 2, 1, 4], [2, 1]));