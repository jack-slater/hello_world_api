var express = require('express')
var app = express()

app.use('/', function (req, res) {
  res.status(200).send({status: 'ok'});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});
