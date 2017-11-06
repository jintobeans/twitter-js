const express = require('express');
const app = express();
const volleyball = require('./volleyball');

app.listen(3000, function(){
    console.log('server listening');
});

app.use(volleyball);

app.use('/',function(req, res, next){
    console.log('GET / ' + res.statusCode);
    next();
})


app.get('/', function(req, res){
    res.send('hello world!!!');
});

app.get('/news', function(req, res){
    res.send('whatsup');
});