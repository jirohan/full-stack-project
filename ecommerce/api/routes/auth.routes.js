const express = require("express");
const app_routes = express.Router();

const AuthController = require("../app/controller/auth.controller")
const auth_ctrl = new AuthController();
// Auth and Authorization
// Eg: Login, Register, Logout, forget Password, Dashboard, Activation User

const uploader = require("../app/middleware/uploader.middleware")

app_routes.post("/login", auth_ctrl.loginUser);

app_routes.post("/register", uploader.single('image'), auth_ctrl.registerUser);

app_routes.post("/logout", auth_ctrl.logoutUser);

app_routes.post("/change-pwd", auth_ctrl.changePwd);

module.exports = app_routes;