const express = require("express");
const app_routes = express.Router();

const AuthController = require("../app/controller/auth.controller");
const auth_ctrl = new AuthController();

app_routes.post("/login", auth_ctrl.loginUser)

app_routes.post("/register", auth_ctrl.registerUser)

module.exports = app_routes;