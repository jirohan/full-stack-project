// const express = require("express");
// const exp_app = express.Router();

const router = require("express").Router();

router.route("/")
    .get((req, res, next)=> {
        //return all categories
    })
    .post((req, res, next)=> {
        // login check 
        // permission
        // category create
    })

//category/param
router.put("/:id", (req, res)=> {
    
    //access param
    let id = req.params.id;

    // after ?
    // let query = req.query.price;

    console.log(id)
})

router.delete("/:slug", (req, res)=> {
    //register a category
    let slug = req.params.slug;
    console.log(slug)
})

//edit => /category/id
//delete => /category/id

module.exports = router;