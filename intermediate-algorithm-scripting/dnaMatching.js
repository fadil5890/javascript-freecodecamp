function pairElement(str) {
    let arr = [];
    let pair1 = ['A','T'];
    let pair2 = ['C','G'];
    for(let i = 0; i < str.length;i++){
      if(str[i] === pair1[0]){
        arr.push([str[i],pair1[1]]);
      }else if(str[i] === pair1[1]){
        arr.push([str[i],pair1[0]]);
      }else if(str[i] === pair2[0]){
        arr.push([str[i],pair2[1]]);
      }else if(str[i] === pair2[1]){
        arr.push([str[i],pair2[0]]);
      }
    } 
  
    return arr;
  }
  
  console.log(pairElement("GCG"));  //[ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
  console.log(pairElement("TAT"));  //[ [ 'T', 'A' ], [ 'A', 'T' ], [ 'T', 'A' ] ]
