var express = require('express');
var bodyParser = require('body-parser');
//var multer = require('multer');
// var path = require('path');
var app = express();



// 解析 application/json
app.use(bodyParser.json()); 

// 解析 url编码
app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/', function(req, res){
   res.send(req.body);
});

app.post('/', function(req, res){
   console.log(req.body);
   res.send(req.body);
});

app.listen(3001);