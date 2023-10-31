const express = require("express");
const { updateUser, deleteUser, getUser, getUsers } = require("../app/controller/user.controller");
const router = express.Router();

//Update
router.put("/:id", updateUser);

//Delete
router.delete("/:id", deleteUser);

//Get
router.get("/:id", getUser);

//Get All
router.get("/", getUsers);


module.exports = router;