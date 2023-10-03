const express = require("express");
const app_routes = express();

const room_routes = require("./room.routes");

app_routes.use("/api/rooms", room_routes);

module.exports = app_routes;