const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home", {
    docTitle: "Home",
    path: "/",
  });
});

module.exports = router;
