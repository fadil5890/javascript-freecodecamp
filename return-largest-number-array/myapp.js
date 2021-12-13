function largestOfFour(arr) {
    let maxValue = 0;
    let arrMaxValue =[];
    for(let i=0; i < arr.length;i++){
      for(let j=0; j < arr[i].length;j++){
        if(arr[i][j] > maxValue){
          maxValue = arr[i][j];
        }
        
      }
      arrMaxValue.push(maxValue);
    }
    return arrMaxValue;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));