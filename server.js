// Give access to entire Express API
var express = require('express');

// Create our App by calling express library as a function passing nohting as the arguments
var app = express();

//Tell it which folder we want to serve.  App.use let's you add functionality to your express application
//express.static specifies a folder name (public) that we want to expose to the web server.
app.use(express.static('public'));

//starts the server
app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
