var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/school');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Connection Open to MongoDB');
});

var StudentSchema = mongoose.Schema({
   firstname: String,
   lastname: String,
   rollnumber: Number
});

var Student = mongoose.model('Student', StudentSchema);


function onStudentSave (err, student) {
  if (err){
     console.log("Saving Failed" + student.firstname);
  }else{
  	 console.log("Saving Successful" + student.firstname);
  }
} 

module.exports.mongoose = mongoose
module.exports.Student = Student;
module.exports.onStudentSave = onStudentSave;
