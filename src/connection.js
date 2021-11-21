const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/FreshBack";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

module.exports = mongoose
