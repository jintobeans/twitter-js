const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweetsList = tweetBank.list();
  res.render( 'index',{ tweets: tweetsList , title: 'homepage', showForm: true} );
});

router.get( '/users/:name', function (req, res) {
    var name =  req.params.name; // --> 'nimit'
    var tweets = tweetBank.find({name: name});
    res.render( 'index', { tweets: tweets, title: name + "'s page"} );
  });

router.get('/tweets/:id', function(req, res){
    var id = parseInt(req.params.id);
    console.log(id);
    var tweets = tweetBank.find({id: id});
    res.render('index', {tweets: tweets, title: 'tweet id: ' + id});
});
  
// router.get('/stylesheets/style.css', function(req, res){
//     res.sendFile('/public/stylesheets/style.css')
// })

module.exports = router;