var person = {
  firstname: '',
  lastname: '',
  greet: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

// empty object whose prototype is a person
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john.greet());

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';
console.log(jane.greet());
