const express = require("express");
const router = express.Router();

let markedRepos = [];

router.post("/mark-repo/:id", (req, res) => {
  const found = markedRepos.findIndex(element => element === req.params.id);
  if (found === -1) {
    // means element was not found and can be inserted into the array
    markedRepos.push(req.params.id);
    res.send({ message: "repo is marked" });
  } else {
    // means element is already the array and should be removed
    markedRepos.splice(found, 1);
    res.send({ message: "repo is unmarked" });
  }
});

router.get("/", (req, res) => {
  res.json(markedRepos);
});

module.exports = router;
