var mongoose = require('mongoose');
var Schema = mongoose.Schema;

studentSchema = new Schema( {
   
    sno:String,
    fullname:String,
    dept:String,
    regnum:String,
    email:String,
    phone:String,
    year:String
}),

Student = mongoose.model('Student', studentSchema);

module.exports = Student;
