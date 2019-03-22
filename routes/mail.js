var express = require('express');
var router = express.Router();

var sub,name,mail,email,mes

var chk=function(err,req, res, next) {
console.error(err.stack)
next(err)}

var gcb=function(req, res, next) {
res.render('mail', {title: 'お問い合わせ',});
}

router.get('/mail',[chk,gcb]);

module.exports = router;
