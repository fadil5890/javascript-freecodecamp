const USER = { name: 'John Doe', age: 34, hobby:'Gaming' };
const USER_2 = {
    johnDoe : {
        age : 32,
        hobby : 'gaming',
        email : 'johnDoe@freeCodeCamp.com'
    }
}
/*
const name = user.name;
const age = user.age;
*/

//alternative with destructuring assignment
    // const {hobby,name,age} = user;

// OR you can assigning a new variable in destructuring assignment
const {hobby:userHobby,name:userName,age:userAge} = USER;   //userHobby = USER.hobby

// AND you can do it in nested object
const {johnDoe:{email:johnEmail,age:johnAge,hobby:johnHobby}} = USER_2;
// OR if you want to access every nested object
    /*
    const {johnDoe} = USER_2;   //USER_2.johnDoe
    const {email,age,hobby} = johnDoe;
    */

// destructuring inside arrow function    
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}

console.log(
    userName,    //will result 'John Doe'
    //johnDoe,      //USER_2.johnDoe
    johnEmail         //USER_2.johnDoe.email
); 
