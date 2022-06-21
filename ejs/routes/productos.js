const express = require("express");

// aca guardamos los productos
const productos = require("../models/productos");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("productos", {
    docTitle: "Listado de Productos",
    path: "/productos",
    productos,
  });
});

router.post("/", (req, res, next) => {
  let newId = 1;
  if (productos.length > 0) {
    newId = productos[productos.length - 1].id + 1;
  }
  productos.push({
    id: newId,
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  });
  res.redirect("/productos");
});

module.exports = router;
