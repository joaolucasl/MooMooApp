var socket = io('http://localhost:3000');

socket.on('update', function (data) {
  console.log(data);
});
