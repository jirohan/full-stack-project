const express = require("express");
const router = express.Router();
const {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getHotels

} = require("../app/controller/hotels.controller")

//Create
router.post("/", createHotel);

//Update
router.put("/:id", updateHotel);

//Delete
router.delete("/:id", deleteHotel);

//Get
router.get("/:id", getHotel);

//Get All
router.get("/", getHotels);

module.exports = router;