let arr = [
    {name : 'Fadil', age : 18, hobby : 'gaming'},
    {name : 'Joni', age : 19, hobby : 'movies'},
    {name : 'Silvia', age : 20, hobby : 'music'}
];

const newArr = arr.map( arr => 
    ({Nama : arr['name'],
      Hobi : arr['hobby']
      }
    ));

console.log(newArr);


// Build my own "map()" method

var s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for(let a = 0; a < this.length; a++){
    newArray
      .push
      (
        callback(this[a])                      /*function(item) {
                                                  return this[a] * 2;
                                               }*/
      );
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});


console.log(new_s)