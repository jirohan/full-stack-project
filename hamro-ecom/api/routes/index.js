const express = require("express");
const routes = express();

const productRouter = require('./product.routes');
const categoriesRouter = require('./categories.routes');
const usersRouter = require('./users.routes');
const ordersRouter = require('./orders.routes');

routes.use("/products", productRouter)
routes.use("/categories", categoriesRouter)
routes.use("/users", usersRouter)
routes.use("/orders", ordersRouter)

module.exports = routes;