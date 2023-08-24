const express = require("express")
const brand_app = express();

brand_app.get("/", (req, res)=>{

})

brand_app.post("/", (req, res)=>{

})

brand_app.put("/:id", (req, res)=>{
    let id = req.params.id;
})

brand_app.delete("/", (req, res)=>{

})

module.exports = brand_app;