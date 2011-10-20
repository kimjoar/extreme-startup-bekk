var express = require("express");

var app = express.createServer();
app.use(express.cookieParser());
app.use(express.session({
    "secret": "boyah"
}));

var answer = require("./lib/answer");

app.get("/", function(req, res) {
  var q = req.param("q");
  var a = answer(q, req.session) || "";
  console.log("Q: \"" + q + "\" A:\"" + a + "\"");
  res.end("" + a);
});

app.listen(1337, "10.0.21.116");
console.log("Server running on http://10.0.21.116:1337/");
