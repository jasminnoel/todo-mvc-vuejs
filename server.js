var express = require('express');
var http = require('http');
var session = require("express-session");
var bodyParser = require('body-parser');
var path    = require("path");
var fs   = require("fs");
var multer  = require('multer'); //mutipart form data
var upload = multer({ dest: 'uploads/' })
//var ctrFilms = require('./films/controleurFilms');//le fichier

var app = express();
var server = http.createServer(app);
server.listen(8080);
app.enable('trust proxy');

app.use(express.static(__dirname));//to get also css, js,...
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.text()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


	app.get('/', function(req, res) {
	    res.sendFile(path.join(__dirname + '/index.html'));
	});
/*
	app.get('/regions', function (req, res) {
	  res.set('Content-Type', 'text/xml');
	  res.send(fs.readFileSync('./library/countriesList.xml', {encoding: 'utf-8'}));
	});

	app.post('/user', upload.array('monfile[]'), function(req, res){
		uc.user_controler(req,res, function(err, response){
			if(!err){
				res.header('Content-type','application/json');
		        res.header('Charset','utf8');
		        res.send(JSON.stringify(response));//error or not
	    	}	
	    });
	});

	app.post('/pecks', upload.array('myFiles[]'), function(req, res){
		pkc.pecks_controler(req,res, function(err, response){
			if(!err){
				res.header('Content-type','application/json');
				res.header('Charset','utf8');
				res.send(JSON.stringify(response));
			}
		});
	});

	app.post('/peckees', function(req, res){
		pkec.peckees_controler(req,res, function(err, response){
			if(!err){
				res.header('Content-type','application/json');
				res.header('Charset','utf8');
				res.send(JSON.stringify(response));
			}
		});
	});

	*/