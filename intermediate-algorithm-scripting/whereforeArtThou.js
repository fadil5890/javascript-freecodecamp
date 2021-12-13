function whatIsInAName(collection, source) {
    let srcKeys = Object.keys(source);

    let result = collection
      .filter(function(obj) {
        return srcKeys.every(function(key) {
          return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
      });

    return result

  }
    

  
  whatIsInAName([
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null }, 
      { first: "Tybalt", last: "Capulet" }
    ], 
      { last: "Capulet" });

      // -----[{ first: "Tybalt", last: "Capulet" }]-----
