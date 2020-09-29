const express = require("express")
const socketio  = require("socket.io")
const http = require("http")
const path = require("path")
const {graphqlHTTP} = require("express-graphql")
const schema = require("./schema/schema")

const mongoose = require("mongoose")

const app = express()

app.use(express.static(path.join(__dirname, "../frontend/build")))


const PORT = process.env.PORT || 5000
app.use('/graphql', graphqlHTTP({
    schema : schema,
    graphiql: true
}))
app.use(express.urlencoded({extended :false}))
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/chats", { useNewUrlParser: true, useUnifiedTopology: true })

const server = http.createServer(app)
const io = socketio(server)

const chatsSchema = new mongoose.Schema({
    id : Number,
    name : String,
    image : String,
    message : [{
        text: String,
        id: String,
        sent: Boolean,
        time: String,
        seen: Boolean,
        newCount: Number,
        new: Boolean
    }],
})

const chat = mongoose.model("chat", chatsSchema)

const newChat = new chat({
    id : 8,
    name : "Wisdom",
    image : 'https://source.unsplash.com/random/200x300',
    message : [{
        text: "new message",
        id: new Date().toLocaleTimeString(),
        sent: true,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        seen: false,
        newCount: 0,
        new: false
    }],
})

// newChat.save()



app.get("/api/chats", function(req,res) {
    chat.find({}, function(err, chats) {
        if(err) {
            console.log(err)
        }
        else {
            res.json(chats)
        }
    })
})

app.post("/updatemessage", function(req,res) {
    const id = req.body.id;
    const message = req.body.message
    console.log(req.body)
    chat.updateOne(
        { _id: id },
        { $push: { message: message } },
        function(err, result) {
          if (err) {
        console.log(err);
          } else {
        console.log(result);
          }
        }
    );
})

app.get("/*", function(req,res) {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"))
})
io.on("connection", function (socket) {
    console.log("connected")

    socket.on("disconnect", function() {
        console.log("disconnected")
    })
} )

server.listen(process.env.PORT || PORT, ()=> {
    console.log("server started")
})