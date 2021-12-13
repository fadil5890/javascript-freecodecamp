var Person = function(firstAndLast) {
    // Only change code below this line
    this.setFirstName = function(first) {
      return firstAndLast = this.getFullName().replace(this.getFullName().split(' ')[0], first);
    };
  
    this.setLastName = function(last) {
      return firstAndLast = this.getFullName().replace(this.getFullName().split(' ')[1], last);
    };
  
    this.setFullName = function(newFirstAndLast) {
      return firstAndLast = newFirstAndLast;
    };
  
    this.getFirstName = function() {
      return this.getFullName().split(' ')[0];
    };
  
    this.getLastName = function() {
      return this.getFullName().split(' ')[1];
    };
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
  
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  bob.setFirstName('Jhon')
  bob.setLastName('Akbar')
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  bob.setFullName('Fadillah Akbar')
  console.log(bob.getFullName());
  
  
  console.log(bob);
  