var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use((req, res, next) => {
	req.db = db;
	next();
})

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Starting our Express app
// =============================================================
db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

