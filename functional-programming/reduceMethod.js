/*

reduce() gives you return single output value.
The first time the callback is called, accumulator and currentValue can be one of two values.

if( reduce(initialValue) === true ){
    accumulator = initialValue;
    currentValue = array[0];
}else {
    accumulator = array[0];
    currentValue = array[1];
}

-------SYNTAX--------

// Arrow function
reduce((accumulator, currentValue) => { ... } )
reduce((accumulator, currentValue, index) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function callbackFn(accumulator, currentValue) { ... })
reduce(function callbackFn(accumulator, currentValue, index) { ... })
reduce(function callbackFn(accumulator, currentValue, index, array){ ... })
reduce(function callbackFn(accumulator, currentValue, index, array) { ... }, initialValue)

NOTE : index in here is same as for(let i = ...)
*/
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const getMax = (a, b) => Math.max(a, b);

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

console.log([103, 104].reduce(getMax,102));     // 100

//example of reduce() creating a new object from an object of array
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
  },{});
  console.log(usersObj);

/*example of using filter(), map(), and for...in loop to get average rating movies from Christoper
  Nolan
*/

function getRating(watchList){
    // Only change code below this line
    let filteredWatchList = watchList
    .filter(watchList => watchList['Director'] === 'Christopher Nolan');
  
    let ratingWatchList = filteredWatchList
    .map(filteredWatchList => { return parseFloat(filteredWatchList['imdbRating'])})
  
    let sumRating = 0;
    for (let i in ratingWatchList){
      sumRating += ratingWatchList[i];
    }
    
    var averageRating = sumRating / ratingWatchList.length;
  
    // Only change code above this line
    return averageRating;
  }
  console.log(getRating(watchList));

/*example of using filter(), map(), and reduce() to get average rating movies from Christoper
  Nolan
*/
  function getRating(watchList){
    // Only change code below this line
    let filteredWatchList = watchList
    .filter(watchList => watchList['Director'] === 'Christopher Nolan');
  
    let ratingWatchList = filteredWatchList
    .map(filteredWatchList => { return parseFloat(filteredWatchList['imdbRating'])})
  
    var averageRating = ratingWatchList.reduce( (a,b) => a + b ) / ratingWatchList.length;
  
    // Only change code above this line
    return averageRating;
  }
  console.log(getRating(watchList));