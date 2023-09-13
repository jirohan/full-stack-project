const express = require("express")
const app_routes = express();

const auth_routes = require("./auth.routes");
const cat_routes = require("./category.routes");
const prod_routes = require("./product.routes");
const label_routes = require("./label.routes");

app_routes.use(auth_routes);
app_routes.use("/category",cat_routes);
app_routes.use("/product", prod_routes);

//register at last
app_routes.use(label_routes);


module.exports = app_routes;