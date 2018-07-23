var express = require('express');
var db = require('./models/db.js');

var app = express();

port = process.env.PORT || 8080;

var routes = require('./routes/route.js');

app.get('/',routes.main);

app.listen(port, function(req, res){
    console.log('app is listening');
});