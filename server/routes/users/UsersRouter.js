const express = require("express");
const UsersController = require("./UsersController");
const usersRouter = express.Router();


usersRouter.post("/", UsersController.createUser);
usersRouter.get("/token", UsersController.tokenGenerator)

module.exports = usersRouter;