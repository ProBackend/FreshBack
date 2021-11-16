const express = require("express");
const router = express.Router();


/* GET home page. */
router.get('/registro', function(req, res) {
    res.send("Holaaa")
});


module.exports = router;