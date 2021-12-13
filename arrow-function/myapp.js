//arrow function with parameter
const MULTIPLY_2 = (num1) => num1 * 2;

//arrow function with 2/more parameter
const MULTIPLY_TOGETHER = (num1,num2) => num1 * num2;

//arrow function with default parameter
const GREETING = (name = "Anonymous") => "Hello " + name;

console.log(
    MULTIPLY_2(3),
    MULTIPLY_TOGETHER(5,7),
    GREETING('Fadil'),
    GREETING(),
    maximus
);