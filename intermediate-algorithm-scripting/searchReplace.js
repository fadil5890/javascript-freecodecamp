function myReplace(str, before, after) {
    if(/[A-Z]/.test(before[0]) === true){
      after = after.replace(after[0],after[0].toUpperCase());
    }else {
      after = after.toLowerCase();
    }
    
    return str.replace(before, after);
  }
  
  console.log(myReplace("I think we should look up there", "up", "Down"));

  //--------------------I think we should look down there------------------

  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

  //--------------------He is Sitting on the couch--------------------------