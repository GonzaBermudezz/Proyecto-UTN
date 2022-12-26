var express = require("express");
var router = express.Router();
var novedadesModel = require('./models/novedadesModel');

router.get("/novedades", async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();
  
  res.render("novedades", { 
    novedades
   });
});

module.exports = router;