const express = require("express")
const app_routes = express();
const auth_routes = require("./auth.routes");
const cat_routes = require("./category.routes");
const prod_routes = require("./product.routes");
const brand_routes = require("./brand.routes");


app_routes.use(auth_routes);
app_routes.use("/category",cat_routes);
app_routes.use("/product", prod_routes);
app_routes.use("/brand", brand_routes);

// app_routes.use((req, res, next) => {
//     console.log("gere");
//     res.status(404).send("Sorry, the page you're looking for doesn't exist.");
// });



// user handle
    //CRUD
// category
// product
// brand
// order
// payment
// banners

module.exports = app_routes;