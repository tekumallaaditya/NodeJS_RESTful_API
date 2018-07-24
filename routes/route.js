var mongoose = require('mongoose');

var employee = mongoose.model('employee');


exports.main = function(req, res){
    employee.find( function(err, data){
        if (data == null){
            console.log('no data in the DB');
            var msg = 'no data in the DB';
            res.send(msg);            
        } else {
            console.log('data is->' + data);
            res.send(data);
        }
    });
}

exports.delEmployee = function(req, res){
    console.log('received req is->' + req.body.email)
    employee.findOneAndRemove(req.body.email, function(err){
        if (err != null) {
            msg = 'no such entry found';
            res.send(err);
        } else {
            console.log('employee details deleted');
            res.status(200).send('employee details deleted');
        }

    })
}

exports.update = function(req, res){
    console.log('received req from update post is -> '+ req.body.department);
    employee.findOneAndUpdate(req.body.email, {$set: {name : req.body.name, DOB: req.body.DOB, department: req.body.department, gender: req.body.gender, age: req.body.age}} , function(err){
        console.log('inside the mongo command' + err)
        if (err != null) {
            msg = 'no such entry found';
            res.send(err);
        } else {
            console.log('employee details updated');
            res.status(200);
        }        
    })
}
