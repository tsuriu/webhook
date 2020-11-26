var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

router.post('/', function(req, res, next) {
  var body = req.body
  var ans = body['webhook']

  console.log(ans)
  res.send(ans)
});

module.exports = router;
