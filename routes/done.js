var express = require('express');
var router = express.Router();

var sub,name,mail,email,mes

var senEma = function(req, res, next) {

    email=req.body.mail
    sub=req.body.sub
    mes="mes"
    //    mes="名前:"+req.body.name+"<br><br>"+req.body.mes.replace(/\r?\n/g,"<br>").replace(/。/g,"。<br>").replace(/■/g,"<br>■").replace(/※/g,"<br>※")
    //mes="名前:"+req.body.name+"<br><br>"+req.body.mes.replace(/。/g,"。<br>")

console.log('=== senEma =======================================');
var snd=require("./js/mail");
try{snd(email,sub,mes)}
catch(err){console.log(err)}
next()};

var chk= function(err,req, res, next) {
console.log(req.body.mail)
console.error(err.stack)
next(err)}

// post =================================
var pcb= function(req, res, next) {

res.render('done', {
title: 'done!'
});
//console.error(err.stack)
//res.status(500).send('Something broke!')
}//fun

router.post('/done',[senEma,chk,pcb]);//post

module.exports = router;
