// this is using the node event emitter
var Emitter = require('events');
var eventsConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventsConfig.GREET, function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on(eventsConfig.GREET, function() {
  console.log('A greeting occurred!');
})


console.log('Hello!');
emtr.emit(eventsConfig.GREET);
