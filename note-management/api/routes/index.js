const express = require("express")
const app_routes = express();

const auth_routes = require("./auth.routes");
const course_routes = require("./course.routes")
const hw_routes = require("./hw.routes")

app_routes.use(auth_routes);

app_routes.use(course_routes);
app_routes.use(hw_routes)

module.exports = app_routes;