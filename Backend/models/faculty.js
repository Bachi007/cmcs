var mongoose = require('mongoose');
var Schema = mongoose.Schema;

facultySchema = new Schema( {
   
    fullname:String,
    dept:String,
    empnum:String,
    email:String,
    phone:String
}),

Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
