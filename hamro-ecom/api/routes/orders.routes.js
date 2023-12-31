const express = require("express");
const router = express.Router();
const {Order} = require("../app/models/order.model")

router.get(`/`, async (req, res) => {
    const orderList = await Order.find();
    if(!orderList){
        res.status(500).json({success: false})
    }
    res.json(orderList);
})

module.exports = router;