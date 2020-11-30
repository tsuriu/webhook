var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');

var webHookSzchat = require('./routes/webhook.js')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/webhook', webHookSzchat);

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer({
    key: fs.readFileSync('/etc/letsencrypt/live/api.squidtelecom.com.br/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/api.squidtelecom.com.br/cert.pem'),
    passphrase: 'YOUR PASSPHRASE HERE'
}).listen(443);
