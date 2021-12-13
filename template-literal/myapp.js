const person = {
    name: "Zodiac Hasbro",
    age: 56
  };

let {name:myName,age:myAge} = person;

const greeting = `Hello, my name is ${myName}!
I am ${myAge} years old.`;
  
  console.log(greeting);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(let i=0; i<3; i++){
    failureItems[i] = `<li class="text-warning">${arr[i]}</li>`
  }
  // Only change code above this line
  console.log(failureItems);
  return failureItems;
}

const failuresList = makeList(result.failure);