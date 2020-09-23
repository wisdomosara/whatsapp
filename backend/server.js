const express = require("express")
const socketio  = require("socket.io")
const http = require("http")

const app = express()

const PORT = process.env.PORT || 5000

const server = http.createServer(app)
const io = socketio(server)

app.get("/", function(req,res) {
    res.send("rtesta")
})

io.on("connection", function (socket) {
    console.log("connected")

    socket.on("disconnect", function() {
        console.log("disconnected")
    })
} )

server.listen(PORT, ()=> {
    console.log("server started")
})