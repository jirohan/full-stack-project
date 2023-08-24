// const express = require("express");
// const exp_app = express.Router();

const exp_app = require("express").Router();

exp_app.route("/")
    .get((req, res, next)=> {
        //return all categories
    })
    .post((req, res, next)=> {
        //register a category
    })

//category/param
exp_app.put("/:id", (req, res)=> {
    
    //access param
    let id = req.params.id;

    // after ?
    // let query = req.query.price;

    console.log(id)
})

exp_app.delete("/:slug", (req, res)=> {
    //register a category
    let slug = req.params.slug;
    console.log(slug)
})

//edit => /category/id
//delete => /category/id

module.exports = exp_app;