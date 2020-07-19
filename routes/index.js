const express = require('express');
const router  = express.Router();

const Score = require('../models/Score.js');


/* GET home page */
router.get('/', (req, res, next) => {
  Score.find()
  .sort({timeWin:1})
  .then(function (scores) {
    // console.log('Les scores de la DB sont', scores);
  
    res.render('homepage', {
      allScores: scores
    });
  }).catch(err => console.error(err));
  });


router.get('/memory', (req, res, next) => {
  res.render('memory');
});



router.post('/memory', (req, res, next) => {
  console.log("req.body.firstname",req.body.firstname);
  console.log("req.body.timeWin",req.body.timeWin);
  //on peut utiliser req.body pcq on a intallé body parser
 
  // je crée un nouveau document avec les données grace au modele
  Score.create ({
    firstname:req.body.firstname,
    timeWin:req.body.timeWin
  }).then(function (score){
    res.redirect('/');

  }).catch(function (err) {
    console.error(err);
    next(err);
  })
  
});


module.exports = router;
