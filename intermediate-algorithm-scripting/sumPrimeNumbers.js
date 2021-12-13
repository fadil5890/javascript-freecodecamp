function sumPrimes(num) {
    if(num < 2) return 'Invalid input!';
    let primeArr = []
    let isPrime = (number) => {
      if(number < 2) return false;
      //else
      for(let i = 2; i < number; i++){
        if(number % i == 0) return false
      }
      return true
    }
    for(let i = 2; i <= num; i++){
      if(isPrime(i) === true) primeArr.push(i);
    }
    return primeArr.reduce( (accu, curValue) => accu + curValue);
  }
  
  console.log(sumPrimes(10));
  
  /*
  
  6 % 6 = 0
  6 % 5 = 1
  6 % 4 = 2
  6 % 3 = 0
  6 % 2 = 0
  6 % 1 = 0
  
  7 % 7 = 0
  7 % 6 = 1
  7 % 5 = 2
  7 % 4 = 3
  7 % 3 = 1
  7 % 2 = 1
  7 % 1 = 0
  
  */