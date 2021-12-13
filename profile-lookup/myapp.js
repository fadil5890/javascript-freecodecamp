// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    var value;
    
    for(var i=0; i<4; i++){
        if(name == contacts[i]['firstName']){
            if(contacts[i][prop] != undefined){
                value = contacts[i][prop];
            }else {
                value = 'No such property';
            }
            
        }
        
    } 
    if(value == undefined){
        value = 'No such contact';
    };
    
    
    return value;
    
// Only change code above this line
};

console.log(
    lookUpProfile('Bob','number'),
    Math.random()
);
