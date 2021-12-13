function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row;
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);

myMultiDimentionalArray = [[{one:1,two:2},{three:3,four:4}],[{five:5,six:6},{seven:7,eight:8}]];

let array = [[1,'two',1],['four','five','six']];
let result = array.indexOf(1);
console.log(result);


for( let j = 0;j < arr[i].length; j++){
  if(arr[i][j] === elem){
    arr[i].splice(j,1);
  }
}