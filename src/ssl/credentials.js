var fs = require('fs');
    path = require('path'),
    keyPath = path.join(__dirname, 'webhook.key');
    crtPath = path.join(__dirname, 'webhook.cert');

var privateKey = fs.readFileSync(keyPath, {encoding:'utf8'});
var certificate = fs.readFileSync(crtPath, {encoding:'utf8'});

module.exports = {key: privateKey, cert: certificate};
