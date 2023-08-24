const express = require("express");
const prod_app = express();

prod_app.get("/", (req, res)=>{

});

prod_app.post("/", (req, res)=>{

});

prod_app.put("/:id", (req, res)=>{
    let id = req.params.id;
});

prod_app.delete("/", (req, res)=>{

});

module.exports = prod_app;