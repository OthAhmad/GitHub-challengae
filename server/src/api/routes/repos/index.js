const express = require("express");
const request = require("request");
const rp = require("request-promise");
const router = express.Router();
const { gitHubApi } = require("../../../utils/constants");

router.get("/", (req, res) => {
  const { q } = req.query;

  rp({
    url: `${gitHubApi}/search/repositories?q=${q}?pre_page=30`,
    headers: {
      "User-Agent": "Request-Promise"
    }
  })
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
