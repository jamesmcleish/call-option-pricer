const express = require("express");
const UsersController = require("./UsersController");
require("./../../util/tokenChecker")
const usersRouter = express.Router();


usersRouter.post("/", UsersController.createUser);
usersRouter.get("/token", UsersController.tokenGenerator)
usersRouter.post("/saveproject", tokenChecker, UsersController.saveProject)

module.exports = usersRouter;