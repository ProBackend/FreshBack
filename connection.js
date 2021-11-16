const mongoose = require("mongoose");
const url = "mongodb://localhost/FreshBack";

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));