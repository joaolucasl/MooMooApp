var express = require('express');
var cons = require('consolidate');
var hs = require('handlebars');
var fs = require('fs');
var sessions = require('client-sessions');
var nuuid = require('node-uuid');
var bodyParser = require('body-parser');
var routes = require(__dirname + '/routes/routes');
var app = express();
var server;
var socket;

/* This code block defines the folder for partials,
 * to be used with the views and avoid repetition in the headers/footers.
 * It looks for <code>.html</code> files in the directory and
 * registers them to be used by Handlebars.
 */
var partials = __dirname + '/views/partials/';

fs.readdirSync(partials).forEach(function (file) {
  var source = fs.readFileSync(partials + file, 'utf8'),
    partial = /(.+)\.html/.exec(file).pop();

  hs.registerPartial(partial, source);
});

//  View rendering settings
app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//  Body parsing middleware for POST requests
app.use(bodyParser.urlencoded({ extended: false }));

//  Secure Session definition for user persistency
app.use(sessions({
  cookieName: 'userSession', // cookie name dictates the key name added to the request object
  secret: 'jairo-the-cow', // our secret string for encryption
  duration: 30 * 24 * 60 * 60 * 1000 // The user session will be valid for 30 days
}));

/*
 * A Middleware function to reset the duration to
 * 30 days each time the user is active again.
 * Since we don't have logins, using sessions is
 * the only way to ensure the user has access
 * to their content when they use the app again.
 **/
function userSessionMiddleware(req, res, next) {
  if (req.userSession.uuid) {
    req.userSession.setDuration(30 * 24 * 60 * 60 * 1000);
  } else {
    req.userSession.uuid = nuuid.v1();
  }
  console.dir(req.userSession);
  next();
}

//  Allowing public folder to be accessed by clients via main route
app.use(express.static(__dirname + '/public'));

// Setting the routes.js file as the responsible for the main routes.
app.use('/', userSessionMiddleware, routes);


server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});


// Starting Socket stuff
socket = require(__dirname + '/controllers/socket');
socket.listen(server);
