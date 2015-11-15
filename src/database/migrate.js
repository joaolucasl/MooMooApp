var DBConn = require("./db");
var nuuid = require('node-uuid');

// Synchronising the database tables
DBConn.DB.sync({
    logging: console.log()
  })
  .catch(function (err) {
    console.dir(err);
  });


// Adding a new post to populate the DBase
DBConn.models.Post.create({
  content: "Hello, World! Here, have this random number: " + Math.random(),
  uuid: nuuid.v1(),
  latitude: -27.470,
  longitude: 153.021
}).then(function () {
  console.log("Ok");
}).catch(function (err) {
  console.log(err);
});
