const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

// inicialización
const app = express();
require("./connection");

// Ajustes
// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
    destination: path.join(__dirname, "public/uploads"),
    filename: (req, file, cb, filename) => {
        console.log(file);
        cb(null, uuidv4() + path.extname(file.originalname));
    },
});
app.use(multer({ storage }).single("image"));

app.use(express.static(path.join(__dirname, "/public")));
app.use('/public', express.static('public'));

// rutas
app.use(require("./routes/index"));

// start
app.listen(3000, () => {
    console.log(`Server on port ${app.get("port")}`);
});