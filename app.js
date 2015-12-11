var express  = require('express');
var request = require('request');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test', function (req, res) {
  var url = 'https://maps.google.com/maps/api/geocode/json?address=seattle';
  request(url, function (err, result, obj) {
    if (err) {
      console.log(err);
    } else {
      res.send(obj);
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
