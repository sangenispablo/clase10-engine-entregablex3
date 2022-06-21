const express = require("express");

const homeRouter = require("./routes/home");
const productosRouter = require("./routes/productos");

const app = express();

// seteamos pug
app.set("view engine", "pug");
app.set("views", "views");

// middleware varios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static, sirve archivos estaticos
app.use(express.static("public"));

// cargamos las rutas
app.use("/", homeRouter);
app.use("/productos", productosRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "404 | Page not found" });
});

module.exports = app;
