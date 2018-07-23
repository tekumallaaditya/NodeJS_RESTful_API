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
