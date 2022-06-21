const express = require("express");
const { engine } = require("express-handlebars");

const homeRouter = require("./routes/home");
const productosRouter = require("./routes/productos");

const app = express();

// seteamos express-handlebars usamos defaultLayout en false para evitar la
// configuración por defecto
app.engine(
  "hbs",
  engine({
    defaultLayout: "main-layout",
    layoutsDir: "views/layouts/",
    extname: "hbs",
  })
);
// Si quiero que no le debe bola al main-layout.hsb le puedo pasar al objeto
// en el render layout: false
app.set("view engine", "hbs");
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
  res
    .status(404)
    .render("404", { docTitle: "404 | Page not found", layout: false });
});

// Si quiero que no le de bola al layout debo pasarle al render
// layout: false

module.exports = app;
