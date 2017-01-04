var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.status(200).send({status: 'ok'});
});

app.get('/hello', function (req, res) {
  res.send('Hello World');
});

app.listen(process.env.PORT || 4000, function () {
  console.log('Example app listening on port 3000!');
});
