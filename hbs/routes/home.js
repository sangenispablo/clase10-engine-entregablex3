const express = require("express");

const productos = require("../models/productos");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home", {
    docTitle: "Home",
    activeNuevo: true,
  });
});

module.exports = router;
