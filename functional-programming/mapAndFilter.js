var mapList = watchList.map(watchList => ({
    ['title']:watchList['Title'],
    ['rating']:watchList['imdbRating']}));
  
var filteredList = mapList.filter(mapList => mapList['rating'] >= 8.0);

console.log(filteredList);



// Build my own "filter()" method

var s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  for(let i = 0; i < this.length; i++){
    if(callback(this[i]) === true){
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);