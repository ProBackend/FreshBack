const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");


const path = require("path");

// inicialización
const app = express();
require("./connection");

// Ajustes
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb, filename) => {
    console.log(file);
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("image"));

// rutas
app.use(require("./routes/index"));

// Middleware 
app.use(express.static(path.join(__dirname, "public")));
app.use('/public', express.static('public'));

// start
app.listen(3000, () => {
  console.log(`Server on port ${app.get("port")}`);
});