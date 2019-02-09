const mongoose = require('mongoose');
let user = new mongoose.Schema({
    email    : { type: String,index: true,unique: true},
    name     : String,
    password : String
});
let User = mongoose.model('usersdb_xxx', user);
module.exports = User;
