function frankenSplice(arr1, arr2, n) {
    let copyArr1 = arr1.slice(0);
    let copyArr2 = arr2.slice(0);
    copyArr2.splice(n,0,...copyArr1);
    return copyArr2;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));