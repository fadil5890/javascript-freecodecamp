function getIndexToIns(arr, num) {
    let sortArr = arr.sort();
    let filterArr = sortArr.filter((belowNum) => belowNum < num );
    let result = filterArr.length;
    return result;
  }
  
  console.log(getIndexToIns([40, 60, 70, 30,55], 75));