const express = require("express");
const app = express();

// Auth and Authorization
// Eg: Login, Register, Logout, forget Password, Dashboard, Activation User

app.post("/login", (req, res)=>{
    // TODO: Valdiation, Modeling, DB Query,  
    let validation_flag = false;
    if(!validation_flag){
        res.status(400).json({
            result: null,
            status: false,
            msg: "Credential doesnt match"
        });
    } else{
        res.json({
            result: null,
            status: true,
            msg: "Login Success"
        });
    }
});

app.listen(3005, 'localhost', (err) => {
    if(!err) {
        console.log("Server is listening to port 3005");
        console.log("Press CTRL + C to disconnect to the server...")
    }
})