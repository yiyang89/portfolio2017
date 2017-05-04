var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/newPort'));

app.get('/', function(request, response) {
  response.sendfile('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
