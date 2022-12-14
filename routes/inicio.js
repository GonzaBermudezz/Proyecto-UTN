var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/inicio", function (req, res, next) {
  res.render("inicio", { title: "Express" });
});

module.exports = router;

