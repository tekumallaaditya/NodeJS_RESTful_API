var express = require('express');
var db = require('./models/db.js');
var cors = require('cors')

var bodyParser=require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.options('*', cors());

port = process.env.PORT || 8080;

var routes = require('./routes/route.js');

app.get('/',routes.main);
app.post('/del', routes.delEmployee);
app.post('/update', routes.update);
app.post('/create', routes.create);

app.listen(port, function(req, res){
    console.log('app is listening');
});