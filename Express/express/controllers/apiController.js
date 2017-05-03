var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app) {

  app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you for the JSON data!')
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });

  // callback function for when the /api url is requested
  app.get('/api', function(req, res) {
    res.json({
      firstname: 'Jacob',
      lastname: 'Landman'
    });
  });

}
