const express = require("express")
const app_routes = express();
const auth_routes = require("./auth.routes");
const cat_routes = require("./category.routes");

app_routes.use(auth_routes);
app_routes.use(cat_routes);

app_routes.use("/", (req, res)=> {
    
});




// user handle
    //CRUD
// category
// product
// brand
// order
// payment
// banners

module.exports = app_routes;