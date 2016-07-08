/**
 * Created by negrero on 07/07/2016.
 */
var express = require('express');
var app = express();
var fs = require("fs");
var path=require("path");

var bodyParser = require('body-parser');
var multer  = require('multer');
var storage=multer.memoryStorage()
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
var upload=multer({ storage: multer.memoryStorage() });
app.use(upload.single('file'))
/*
app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
})
*/
app.post('/', function (req, res,next) {

    console.log(req.file.originalname);
    console.log(req.body);
    res.end( JSON.stringify({file:req.file,}  ) );

})

app.get('/',function(req,res){
    res.end("de puuuutamadre te has conectado")
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})