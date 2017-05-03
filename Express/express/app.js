var express = require('express');

var app = express();

var apiController = require('./controllers/apiController')
var htmlController = require('./controllers/htmlController')

// either use the environment variable or use 3000
var port = process.env.PORT || 3000;

// set the templage engine for html
app.set('view engine', 'ejs');

// use middleware
// everytime we see '/assets', it will use the given path and stream back the files
app.use('/assets', express.static(__dirname + '/public'));

// use takes a string and a callback function
app.use('/', function(req, res, next) {
  console.log('Requrest Url: ' + req.url);
  next();
});

apiController(app);
htmlController(app);

app.listen(port);
