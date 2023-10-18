const express = require("express");
const ProjectsController = require("./ProjectsController");
const ProjectsRouter = express.Router();

ProjectsRouter.post("/", ProjectsController.saveProject);
ProjectsRouter.get("/", ProjectsController.getProjects)

module.exports = ProjectsRouter