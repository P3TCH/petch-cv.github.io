var express = require('express');
const path = require('path')
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { emitWarning } = require('process');
const { application } = require('express');

var port = 8080;
const secret = 'i here too';


app.use(cors())

app.use('/image', express.static(__dirname + '/image'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));


app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/home.html');
})

app.get('/login', function (req, res, next) {
    res.sendFile(__dirname + '/login.html');
})

app.listen(port, function () {
    console.log(`Hello,`)
    console.log(`Server made by Sorawit Namseetan!`)
    console.log(`web server listening on port ${port}`)
})
