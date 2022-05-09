var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {allowEIO3: true});


io.on("connection",(socket) => {// evento de conexão
      
    socket.on("disconnect",() => {
        console.log("x desconectou: " + socket.id);
    });


    socket.on("boasvindas", (data) => {
        console.log("EXECUTANDO EVENTO DE BOAS VINDAS");
        console.log(data);
    })

    socket.on("palavra",(data) => {
        console.log(data);
        socket.emit("resultado", data + " - DESENVOLVEDOR!");
    });

});



app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

http.listen(3000, () => {
    console.log("APP RODANDO!");
})