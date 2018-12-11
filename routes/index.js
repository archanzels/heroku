var express = require('express');
var router = express.Router();

var Test = require('../models/Test');

/* GET home page. */
router.get('/', function (req, res, next) {
  Test.find({}).then(result => {
    res.json(result);
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;
