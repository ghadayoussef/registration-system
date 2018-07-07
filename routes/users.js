var express =require('express');
var router =express.Router();
var mongojs= require('mongojs');
var db =mongojs('passportapp',['users']);
var bcrypt =require('bcryptjs');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;

//login page -get
router.get('/login',function(req,res){
	res.render('login');
});

//register page -get
router.get('/register',function(req,res){
	res.render('register');
});
 
 //register page -post
//
router.post('/register',function(req,res){
	console.log('Adding user...');
	res.render('register');
});



module.exports=router;