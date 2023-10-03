const router = require("express").Router();

const Room = require('../app/model/room.model')

router.get("/getallrooms", async(req, res)=> {
    try {
        const rooms = await Room.find({})
        return res.json({
            rooms
        })
    } catch (error) {
        return res.status(400).json({msg: error});
    }

});

module.exports = router;