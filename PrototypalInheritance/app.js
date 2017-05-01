function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var jacob = new Person('Jacob', 'Landman');
jacob.greet()

var jane = new Person('Jane', 'Doe');
jane.greet()
console.log(jacob.__proto__);
