const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/',(req, res) =>{
    //res.send("Strona działa!");
    res.render('index',{});
});

app.get('/regulamin',(req, res) =>{
    res.render('regulamin',{});
});

app.get('/omnie',(req, res) =>{
    res.render('omnie',{});    
});
app.get('/kontakt',(req, res) =>{
    res.render('kontakt',{});    
});

app.get('/galeria',(req, res) =>{
    res.render('galeria',{});    
});


app.listen(5000, () => {
    console.log("Serwer działa!");
});