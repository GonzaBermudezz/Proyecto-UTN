var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/historia", function (req, res, next) {
  res.render("historia", { title: "Express" });
});

module.exports = router;
