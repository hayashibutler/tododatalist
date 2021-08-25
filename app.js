var express = require("express");
var bodyParser = require("body-parser"); // doc thong tin nguoi dung
var morgan = require("morgan");
var mongoose = require("mongoose")

var config = require("./config")
var setupController = require("./api/controllers/setupController")
var todoController = require("./api/controllers/todoController");

var app = express();
var port = process.env.PORT || 3000; //var port = 3000;

app.use("/assets", express.static(__dirname +  "/public")); //thiet lap url do.ng
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); //extend mo rong, chap nhan tat ca kieu du lieu

app.use(morgan("dev")) //load moi req ra console

app.set("view engine", "ejs"); // app.set dung de view

// db info
// console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString(), {useNewUrlParser: true, useUnifiedTopology: true});
setupController(app);
todoController(app);

app.get("/", function(req, res){
    res.render("index") // thiet lap url goc
});

app.listen(port, function() {
    console.log("App listening on PORT: " + port)
})