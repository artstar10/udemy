var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.set("view engine", "ejs");

app.get("/", (res, req) => {
    res.render("index");
})