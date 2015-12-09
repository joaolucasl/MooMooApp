/*jslint node: true */

var express = require("express");
var cons = require("consolidate");
var hs = require("handlebars");
var fs = require("fs");
var http = require("http");
var path = require("path");
var routes = require(__dirname + "/routes/routes")

var app = express();

// View rendering settings
app.engine("html", cons.handlebars);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

//Allowing public folder to be accessed by clients via main route
app.use(express.static(__dirname + '/public'));


/* This code block defines the folder for partials,
 * to be used with the views and avoid repetition in the headers/footers.
 * It looks for <code>.html</code> files in the directory and
 * registers them to be used by Handlebars.
 *
 * */
var partials = __dirname + "/views/partials/";

fs.readdirSync(partials).forEach(function (file) {
  var source = fs.readFileSync(partials + file, "utf8"),
    partial = /(.+)\.html/.exec(file).pop();

  hs.registerPartial(partial, source);
});

// Setting the routes.js file as the responsible for the main routes.
app.use('/', routes);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});


// Starting Socket stuff
var socket = require(__dirname + '/controllers/socket');
socket.listen(server);
