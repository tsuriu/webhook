var http = require('http');
var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');

var webHookSzchat = require('./routes/webhook.js')
var credentials = require('./ssl/credentials.js')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/webhook', webHookSzchat);

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
