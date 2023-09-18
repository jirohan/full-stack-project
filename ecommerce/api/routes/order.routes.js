const auth = require("../app/middleware/auth.middleware");
const { isAdmin, isCustomer } = require("../app/middleware/rbac.middleware");

const OrderController = require("../app/controller/order.controller");

const order_ctrl = new OrderController();

const router = require("express").Router();

router.route("/")
    // .get( order_ctrl.getOrders)
    .post( auth, isCustomer, order_ctrl.createOrder);

// router.route("/:id")    
//     .get( order_ctrl.getOrderById)
//     .delete( auth, isAdmin, order_ctrl.deleteById)
//     .put( auth, isAdmin, uploader.array("images"), order_ctrl.orderUpdate)

module.exports = router;