// Globals and Requires
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var path = require("path");

// Body parsing and static middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/app/public")));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

