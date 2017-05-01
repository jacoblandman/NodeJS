// pass by value
function change(b) {
  b = 2;
}

var a = 1;
change(a);
console.log(a);

// pass by reference
// objects are passed by reference
function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

c = {};
c.prop1 = {};

changeObj(c);
console.log(c);
