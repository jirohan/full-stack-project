const express = require("express")
const app_routes = express();

app_routes.post("/login", (req, res)=>{
    //TODO: Validation, Modeling and DB Query
    let validation_flag = false;
    if(!validation_flag){
        res.status(400).json({
            result: null,
            status: false,
            msg: "Credentials doesn't match"
        });
    } else{
        res.json({
            result: null,
            status: true,
            msg: "Login Success"
        });
    }
});

app_routes.post("/register", (req, res)=> {

});

app_routes.post("/logout", (req, res)=> {

});

app_routes.post("/change-pwd", (req, res)=>{

});

module.exports = app_routes;