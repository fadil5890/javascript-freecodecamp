function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    
    var mapCallback = function(elemArr) {
      var c = Math.pow(earthRadius + elemArr["avgAlt"], 3);
      var b = Math.sqrt(c / GM);
      var orbitalRound = Math.round(a * b);
      return {name : elemArr["name"], orbitalPeriod : orbitalRound};
    }
    return arr.map(mapCallback);
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

  // [ { name: 'sputnik', orbitalPeriod: 86400 } ]