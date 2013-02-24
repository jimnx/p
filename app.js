
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/* Rutas */
app.get('/', function(req,res){res.render('index',{
title:'Peliculas OnLine'});
});

app.get('/', function(req,res){
	res.render('index',{
		title:"aaa"});
});


app.get('/accion', function(req,res){
	res.render('accion',{
		title:"Accion"});
});

app.get('/comedia', function(req,res){
	res.render('comedia',{
		title:"Comedia"});
});
app.get('/drama', function(req,res){
	res.render('drama',{
		title:"Drama"});
});

app.get('/terror', function(req,res){
	res.render('terror',{
		title:"Terror"});
});

app.get('/contacto', function(req,res){
	res.render('contacto',{
		title:"Quienes Somos"});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
