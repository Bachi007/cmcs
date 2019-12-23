var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
   
    name: String,
    email: String,
    mobile:String,
    password: String,
    passwordConf: String,
    role: String,

}),

User = mongoose.model('Users', userSchema);

module.exports = User;
