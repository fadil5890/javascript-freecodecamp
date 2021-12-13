let users = 
{
    name : 
    {
        Alan: {
            online: false
        },
        Jeff: {
            online: true
        },
        Sarah: {
            online: false
        }
    },
    id : 1234
    
};


function countOnline(usersObj) {
    // Only change code below this line
    let output = 0;
    for(let a in usersObj.name){
      if(usersObj.name[a].online === true){
        output += 1;
      }else {
        output += 0;
      }
    }
    return output;
    // Only change code above this line
  }

console.log(countOnline(users));