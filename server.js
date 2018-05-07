const express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3001;

//Middleware: Allows cross-domain requests (CORS)
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    next();
};
app.use(allowCrossDomain);
app.use(express.static("public"));
app.use(bodyParser.json()); // support json encoded bodies
app.set("view engine", "ejs");

app.post("/createPet", function(req, res) {
    var bodyContents = req.body;
    request
        .post({
            uri: "https://clay-pet-shelter-api.herokuapp.com/api/pets/",
            body: bodyContents,
            // body: { name: "cuddles", type: "cat", breed: "cuddler", location: "brussels", lat: 5, long: 5 },
            json: true,
        })
        .pipe(res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
