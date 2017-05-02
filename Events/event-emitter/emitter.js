function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function(type, listener) {
  // if the property exists, great
  // otherwise make a new array
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener)
}

Emitter.prototype.emit = function(type) {
  // something has happened
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

module.exports = Emitter;
