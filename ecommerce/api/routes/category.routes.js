const express = require("express");
const exp_app = express();

exp_app.get("/category", (req, res)=> {
    //return all categories
});

exp_app.post("/category", (req, res)=> {
    //register a category
})

exp_app.put("/category/123", (req, res)=> {
    //register a category
})

exp_app.delete("/category/123", (req, res)=> {
    //register a category
})

//edit => /category/id
//delete => /category/id

module.exports = exp_app;