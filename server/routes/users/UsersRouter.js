const express = require("express");

const UsersController = require("./UsersController");

const usersRouter = express.Router();

usersRouter.post("/", UsersController.createUser);

module.exports = usersRouter;