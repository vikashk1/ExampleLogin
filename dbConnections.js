const mongoose = require('mongoose');
mongoose.connect('mongodb://ds253831.mlab.com:53831/myproject', {
    user: "root",
    pass: "Root123",
    useNewUrlParser: true,
    // "authSource": "admin"
});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
  console.log("we're connected!");
});
module.exports = db;
