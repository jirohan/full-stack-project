const express = require("express");
const router = express.Router();
const {Category} = require("../app/models/category.model")

router.get(`/`, async (req, res) => {
    try {
        const categoryList = await Category.find();

        if(!categoryList){
        res.status(404).json({success: false, message: 'No category found'});
        }    
        res.json(categoryList);
    } catch (error) {
        res.status(500).json({success: false, message: 'Internal server error'});
    }
    
})

router.post('/', async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })
    category = await category.save();

    if(!category)
    return res.status(404).json({success: false, message: 'The category cannot be created!'}) 
    res.json(category);
})

router.delete('/:id', (req, res)=> {
    Category.findByIdAndRemove(req.params.id)
})

module.exports = router;