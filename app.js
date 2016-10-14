var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var cookieParser = require('cookie-parser');

var reload = require('reload');

var app = express();
var port = 5000;

app.set('port', process.env.PORT || port);

var routes = require('./routes/index');

app.use(express.static('static'));
app.use('/', routes);
app.set('view engine', 'pug');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(require('express-session')({
  secret: 'shhh its a secret',
  resave: false,
  saveUninitialized: false
}))
//app.use(passport.initialize());
//app.use(passport.session());

var httpsOptions = {
  key: fs.readFileSync('ssl.key'),
  cert: fs.readFileSync('ssl.crt')
}
/*
var server = https.createServer(httpsOptions, app).listen(port, function() {
  console.log("blog server listening on port "+ port);
  reload(server, app);
});
*/
var server = http.createServer(app);

reload(server,app);

server.listen(app.get('port'), function() {
  console.log('blog server listening on port:'+app.get('port'));
});
