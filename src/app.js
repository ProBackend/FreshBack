const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cons = require('consolidate');

// inicialización
const app = express();
require("./connection");

// Ajustes
app.use(express.json())
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// rutas
app.use(require("./routes/index"));

// Middleware
app.use(express.static(path.join(__dirname, "/public")));
app.use('/public', express.static('public'));

// start
app.listen(3000, () => {
    console.log(`Server on port ${app.get("port")}`);
});