// sets up the angular app
angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc() {
  this.people = clientPeople;
}
