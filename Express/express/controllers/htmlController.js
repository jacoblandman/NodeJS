// create application/x-www-form-urlencoded parser
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  // this function will fire when access the home page or '/'
  app.get('/', function(req, res) {
    res.render('index');
  });

  // the colon tells express that id can be anything
  app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr })
  });

  // urlencoded is middle ware that will be called
  // similar to app.use
  app.post('/person/', urlencodedParser, function(req, res) {
    res.send('Thank you!')
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });
}
