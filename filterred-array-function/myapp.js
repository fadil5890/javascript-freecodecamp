function filteredArray(arr, elem) {
    let newArr = [];
    let checkElem;
    // Only change code below this line
    for( let i = 0;arr.length >i;){
      checkElem = arr[i].indexOf(elem);
      if(checkElem >= 0){
        arr.splice(i,1);
      }else {
        i++;
      }
    }
    newArr = [...arr];
    // Only change code above this line
    return newArr;
  }  