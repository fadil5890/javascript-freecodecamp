//Constructor, Prototype, and Inherits 
function Dog(name) {
  this.name = name;
  }

function Cat(name) {
  this.name = name;
}

function Fish(){
  let name = 'Joni';
  this.fishName = () => name;
}

function Animal() {};

Animal.prototype = {
  constructor : Animal,
  eat : () => 'Eating...',
  describe : () => `My name is ${this.name}`
}

Dog.prototype = {
  constructor : Dog,
  numLegs : 4,

};
Dog.prototype = Object.create(Animal.prototype);

// OR with Cat.prototype = new Animal();
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.numLegs = 4;
Cat.prototype.eat = () => 'Eating some whiskas...';
// OR
let addMixinProp = (obj,prop) => obj.prop = prop;
let addMixinMethod = (obj,method,value) => obj.method = () => value;

Fish.name = 'Nijo';

let arwana = new Fish();
let beagle = new Dog("Snoopy");
let kucing = new Cat('Kuning');

console.log(beagle.constructor);
console.log(beagle instanceof Dog);
console.log(Dog.prototype.isPrototypeOf(beagle));
console.log(Object.prototype.isPrototypeOf(Dog.prototype));
console.log(beagle, beagle.eat());
console.log(kucing, kucing.eat());
console.log(kucing.constructor);
console.log(arwana.fishName());



//Get all own & prototype properties in object created by constructor function
let ownProps = [];
let prototypeProps = [];

// Only change code below this line
function sliceProperties(obj,ownPropObj,protoPropObj){
  for(let property in obj){
    if(obj.hasOwnProperty(property)){
      ownPropObj.push(property);
    }else {
      protoPropObj.push(property);
    }
  }
}

sliceProperties(beagle,ownProps,prototypeProps);






// IIFE (Immediately Invoked Function Expression)
let apaAja = '';
(() => apaAja += 'Deh!')();
console.log(apaAja);

//Another
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

//Examples using it
motionModule.glideMixin(beagle);
beagle.glide();