var fs = require('fs');

// this is a synchronous method
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  if (err) {

  }

  console.log(data)
  console.log('The file has finished reading.');
});

console.log('Done');
