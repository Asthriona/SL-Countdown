const express = require("express");
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path')
const Config = require('./config.json')
const app = express()


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('x-powered-by', 'Yukiko Web Server');

app.get('/', (req, res) => {
    res.render("home")
});

app.listen(Config.port);