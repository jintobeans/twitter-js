const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweetsList = tweetBank.list();
  res.render( 'index', { tweets: tweetsList , title: 'WELCOME'} );
});

// router.get('/stylesheets/style.css', function(req, res){
//     res.sendFile('/public/stylesheets/style.css')
// })

module.exports = router;