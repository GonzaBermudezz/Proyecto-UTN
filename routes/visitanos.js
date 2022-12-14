var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get("/visitanos", function (req, res, next) {
  res.render("visitanos");
});

router.post("", async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var mensaje = req.body.mensaje;

  var obj = {
    to: "gonzalo.bermudez1998@gmail.com",
    subject: "CONTACTO WEB",
    html:
      nombre +
      "" +
      apellido +
      "se contacto a traves y quiere mas info a este correo:" +
      email +
      ".<br> Ademas, hizo este comentario:" +
      mensaje,
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  })

  var info = await transporter.sendMail(obj);

  res.render("visitanos", {
    message: "Mensaje enviado correctamente",
  });
});

module.exports = router;
