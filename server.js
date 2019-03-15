var express = require("express");

// creating the express server
var app = express();

var PORT = 8888;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
// require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });