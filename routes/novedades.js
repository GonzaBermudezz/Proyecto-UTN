var express = require("express");
var router = express.Router();
var novedadesModel = require ('../models/novedadesModel');
var cloudinary = require ('cloudinary').v2;

router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0.5);
  novedades= novedades.map(novedad=>{
    if(novedad.img_id){
      const imagen=cloudinary.url(novedad.img_id, {
        width: 460,
        crop:'fill'
      });
      return{
        ...novedad,
        imagen
      }
    } else {
      return{
        ...novedad,
        imagen: '/images/noimage.jpg'
      }
    }
  });
  
  res.render("novedades", { 
    novedades
   });
});

module.exports = router;
