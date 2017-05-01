// function statment
function greet() {
  console.log('hi');
}
greet();

// functions are first-class
// we can pass them like variables
// we will give this function another function
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
  console.log('Hi Tony');
}

greetMe();
// it's first-class
logGreeting(greetMe);


// use a function expression on the fly
logGreeting(function () {
  console.log('Hello Jacob!');
})
