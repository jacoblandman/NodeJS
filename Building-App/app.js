var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config')
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

// set the port
var port = process.env.PORT || 3000;

// set the location of the html assetss
app.use('/', express.static(__dirname + '/public'));

// set the html template engine
app.set('view engine', 'ejs');

// connect to the mongo database
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

// start express listening for the http requests
app.listen(port);
