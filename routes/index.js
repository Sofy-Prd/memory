const express = require('express');
const router  = express.Router();

const Score = require('../models/Score.js');


//GET home page
router.get('/', (req, res, next) => {
  //on recupère la liste des scores
  Score.find()
  .sort({timeWin:1})  //on les tri par ordre croissant
  .limit(10)  //on recupère que les 10 premiers
  .then(function (scores) {
    res.render('homepage', {
      allScores: scores
    });
  }).catch(err => console.error(err));
  });

//GET memory page
router.get('/memory', (req, res, next) => {
  res.render('memory');
});


//POST memory page (on crée l'enregistrement du score dans MongoDB)
router.post('/memory', (req, res, next) => {
 // je crée un nouveau document avec les données grace au modele
  Score.create ({
    //on peut utiliser req.body pcq on a intallé body parser
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
