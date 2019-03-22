var express = require('express');
var router = express.Router();

var sub,name,mail,email,mes

router.get('/mail', function(req, res, next) {
res.render('mail', {title: 'お問い合わせ',});
});


var senEma = function(req, res, next) {

    email=req.body.mail
    sub=req.body.sub
    mes="名前:"+req.body.name+"<br><br>"+req.body.mes.replace(/\r?\n/g,"<br>").replace(/。/g,"。<br>").replace(/■/g,"<br>■").replace(/※/g,"<br>※")
    //mes="名前:"+req.body.name+"<br><br>"+req.body.mes.replace(/。/g,"。<br>")

console.log('=== senEma =======================================');
var snd=require("./js/mail");
try{snd(email,sub,mes)}
catch(err){console.log(err)}
next()};

var chk= function(req, res, next) {
    email="my.com"
console.log(req.body.mail)
next()};

// post =================================
var pcb= function(req, res, next) {
res.render('done', {
title: 'お問い合わせを受け付けました。後ほど担当の者よりご連絡させて頂きます。'
});
};
router.post('/done',[chk,pcb]);//post

module.exports = router;
