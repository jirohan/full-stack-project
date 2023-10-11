const express = require("express");
const router = express.Router();
const {User} = require("../app/models/user.model")

router.get(`/`, async (req, res) => {
    const userList = await User.find();
    
    if(!userList){
        res.status(500).json({success: false})
    }
    res.json(userList);
})

module.exports = router;