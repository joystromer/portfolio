var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var dogModel = require('../models/dogModel'); // Lägg till .json om ej funkar utan

/* GET users listing. */
// Requesr och response-objekten
router.get('/', function (req, res, next) {
  // funktionen find från Mongoose
  dogModel.find().then(function (dogs) {
    // Skicka bilarna i json-format om fel ej uppstår
    res.json(dogs);
  });
});

router.post('/', function (req, res, next) {
  // req.body är request-objektets innehåll
  dogModel.create(req.body).then(function (post) {
    res.json(post); // Går skrivningen bra skickas den nya datan tillbaka till databasen
  });
});

router.delete('/:id', function (req, res, next) {
  dogModel.findByIdAndDelete(req.parms.id, req.body).then(function (post) {
    res.json(post);
  });
});

/* router.update('/:id', function (req, res, next) {
  dogModel.updateOne().then(function (update) {
    res.json(post);
  });
}); */

module.exports = router;
