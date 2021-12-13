function sumOddFibs(num) {
    let fiboArr = [1,1];
    for(let i = 0; fiboArr[i] + fiboArr[i + 1] <= num; i++){
      fiboArr.push(fiboArr[i] + fiboArr[i + 1]);
    }
    console.log(fiboArr)
    console.log(fiboArr.filter(num => num % 2 === 1))
    return fiboArr.filter(num => num % 2 === 1)
                  .reduce((accu, curValue) => accu + curValue);
  }
  
  console.log(sumOddFibs(1000));
  
  //1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89