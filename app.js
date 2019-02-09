const express = require('express');
const bodyParser = require('body-parser')
const dbServices = require('./dbServices');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('hello world');
});
app.post('/create', dbServices.createUser);
app.post('/login', dbServices.loginUser);
app.post('/forgot', dbServices.forget);
app.post('/reset', dbServices.forget);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
