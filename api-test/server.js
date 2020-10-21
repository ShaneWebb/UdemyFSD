var express = require('express');
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

var ingredients = [
    {
        "id":"12344124",
        "text":"eggs"
    },
    {
        "id":"1324",
        "text":"Milk"
    },
    {
        "id":"433f124f",
        "text":"Bacon"
    },
    {
        "id":"d32de23",
        "text":"Frogs Legs"
    }
];

app.get("/", function(request, response) {
        response.send(ingredients);
});

app.listen(3000, function() {
    console.log("First API running on port 3000!");
});
