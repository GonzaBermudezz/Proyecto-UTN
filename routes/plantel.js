var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/plantel', function(req, res, next) {
  res.render('plantel', { title: 'Express' });
});

module.exports = router;
