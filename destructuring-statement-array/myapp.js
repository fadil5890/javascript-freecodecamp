//if you want to pick index 0 and 1

    /*
    const [a, b] = [1, 2, 3, 4, 5, 6];
    console.log(a, b);
    */

//if you want to pick index 0, 1, and 4

    /*
    const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, c);
    */

//if you want to separate an array with rest parameter
const [a,b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);  //1,2
console.log(arr);   //[3,4,5,7]



