const express = require("express");
const app_routes = express.Router(); // Use express.Router() to create a router

const room_routes = require("./room.routes");
const hotels_routes = require("./hotels.routes");
const auth_routes = require("./auth.routes");
const users_routes = require("./users.routes");

app_routes.use("/api/rooms", room_routes);
app_routes.use("/api/hotels", hotels_routes);
app_routes.use("/api/auth", auth_routes);
app_routes.use("/api/users", users_routes);

module.exports = app_routes;
