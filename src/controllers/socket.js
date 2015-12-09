var socketio = require('socket.io');
/**
 * Module for the server-side socket functions.
 * This will deal with receiving from/emitting
 * changes to the applications frontend.
 * */


var io;
var connectedSockets = [];

module.exports.listen = function (http) {

  this.io = socketio.listen(http);

  this.io.on('connection', function (socket) {
    console.log('SOMEONE CONNECTED!');
    connectedSockets.push(socket);
    socket.emit("YAY", "YAY");
  });

  this.io.on('disconnect', function () {
    console.log('disconnected event');

  });

  return this.io;
}

module.exports.emitToAll = function (message) {
  connectedSockets.map(function (socket) {
    socket.emit('update', message);
  });
}
