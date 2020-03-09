const { Router } = require("express");
const repos = require("./repos");
const bookmarks = require("./bookmarks");

const routes = Router();

routes.use("/repos", repos);
routes.use("/bookmarks", bookmarks);

module.exports = routes;
