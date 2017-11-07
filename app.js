const express = require('express');
const app = express();
const volleyball = require('./volleyball');
const nunjucks = require('nunjucks');

app.use(volleyball);

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

nunjucks.render('index.html', function(err, output ){
    if (err) throw err;
    console.log(output);
});

app.use(express.static('public'))
// express.static should come before routes bc we only want static files to be served statically
// put exceptions first in general

// SEND FILE method needs absolute path to work:
// app.get('/stylesheets', function (req, res) {
//     res.sendFile('/Users/jintingwang/Junior/twitter-js/public/stylesheets/style.css')
//   })


const routes = require('./routes');
app.use('/', routes);
//using '/' means that every request will hit the routes,
//which is why we put express.static above it

app.listen(3000, function(){
    console.log('server listening');
});



// app.use('/',function(req, res, next){
//     console.log('GET / ' + res.statusCode);
//     next();
// })

// app.get('/', function(req, res){
//     res.send( 'Hello world');
// });

// app.get('/news', function(req, res){
//     res.send('whatsup');
// });


// var locals = {
//     title: 'Toozday',
//     people: [
//         { name: 'ambil'},
//         { name: 'hairysmelly'},
//         { name: 'jintobeans'}
//     ]
// };



// app.get('/template', function(req, res){
//     res.render('index.html', locals);
// })







