var chalk = require('chalk');
var mongoose = require('mongoose');

dbURL = 'mongodb://127.0.0.1:27017/employees';

mongoose.connect(dbURL);

mongoose.connection.on('connected', function(){
    console.log(chalk.green('mongoose connected to', dbURL));
});

mongoose.connection.on('error', function(err){
    console.log(chalk.red('mongoose has an error' + err));
});

mongoose.connection.on('disconnected', function(){
    console.log(chalk.yellow('mongoose disconnected'));
});

var employeeSchema = new mongoose.Schema({
    name : {type:String},
    email : {type:String, unique: true},
    DOB: {type:String},
    department: {type: String},
    gender: {type: String},
    age: Number
});

mongoose.model('employee', employeeSchema);