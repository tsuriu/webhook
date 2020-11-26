var express = require('express');
var bodyParser = require('body-parser');

var webHookSzchat = require('./routes/webhook.js')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/webhook', webHookSzchat);

app.listen(3000, () => {
  console.log("fuuuu")
})

module.exports = app;
