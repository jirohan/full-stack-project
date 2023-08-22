const express = require("express");
const app = express();

app.listen(3005, 'localhost', (err) => {
    if(!err){
        console.log("Server is listening to port 3005");
        console.log("Press CTRL + C to disconnect to the server...")
    }
})