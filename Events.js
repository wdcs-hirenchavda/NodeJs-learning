const express = require('express');
const EventEmitter = require('events');
const app = express();
const events = new EventEmitter();

let count =0;

events.on("countAPI",()=>{
    count++;
    console.log(count," times api called");
    
})

app.get('/',(req, res) => {
    res.send("api called");
    events.emit("countAPI")
})
app.listen(5000)

