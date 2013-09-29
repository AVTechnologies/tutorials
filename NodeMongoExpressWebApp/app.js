
var School = require('./Mongo');
var express = require('express');
var app = express();

//Clearing up the DB
School.Student.remove();

var student1 =  new School.Student( { firstname: "fn1", lastname: "ln1" , rollnumber: 101}); 
var student2 =  new School.Student( { firstname: "fn2", lastname: "ln2" , rollnumber: 102}); 
var student3 =  new School.Student( { firstname: "fn3", lastname: "ln3" , rollnumber: 103}); 


student1.save(School.onStudentSave);
student2.save(School.onStudentSave);
student3.save(School.onStudentSave);


app.use(express.static(__dirname + '/public'));

app.get('/students', function(req, res){
  School.Student.find(function (err, students) {
    res.send(students);
  });
});

app.listen(8080);
console.log('Listening on port 8080');

