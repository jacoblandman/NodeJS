// immediately invoked function expression

var firstName = 'Jane';

(function(lastName) {
  var firstName = 'jacob';
  console.log(lastName);
}('Landman'));


console.log(firstName);
