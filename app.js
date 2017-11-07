const express = require('express');
const app = express();
const volleyball = require('./volleyball');
const nunjucks = require('nunjucks');

app.listen(3000, function(){
    console.log('server listening');
});

app.use(volleyball);

app.use('/',function(req, res, next){
    console.log('GET / ' + res.statusCode);
    next();
})

app.get('/', function(req, res){
    res.send( 'Hello world');
});

app.get('/news', function(req, res){
    res.send('whatsup');
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

var locals = {
    title: 'Toozday',
    people: [
        { name: 'ambil'},
        { name: 'hairysmelly'},
        { name: 'jintobeans'}
    ]
};

nunjucks.render('index.html', function(err, output ){
    if (err) throw err;
    console.log(output);
});

app.get('/template', function(req, res){
    res.render('index.html', locals);
})






