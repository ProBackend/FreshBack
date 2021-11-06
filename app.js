const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({
    extended: true,
}));
app.use(bodyparser.json());
const morgan = require('morgan')
app.use(morgan("tiny"))

module.exports = app;