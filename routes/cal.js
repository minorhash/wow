var express = require('express');
var db= require('caldb');
var router = express.Router();
// glob
var par,cal,num,day
var mon=[],mon1=[],mon2=[]
var tes=[],tes1=[],tes2=[]
var mail="minorhash@gmail.com";

var getPar=function(req, res, next) {
par=req.params.id
num=Number(par)

// if(par > 9){
// res.redirect("/cal-9")
// }else if(par < 2){
// res.redirect("/cal-2")

// }

next()}

var getCal=function(req, res, next) {
cal=db.mailCal(mail)

if(num<9){
    var pat=new RegExp("2019-0"+par)
    var pat1=new RegExp("2019-0"+(num-1).toString())
    var pat2=new RegExp("2019-0"+(num+1).toString())

}else if(num==9){
    var pat=new RegExp("2019-0"+par)
    var pat1=new RegExp("2019-10")
    var pat2=new RegExp("2019-08")
}else if(num==10){
    var pat=new RegExp("2019-10")
    var pat1=new RegExp("2019-11")
    var pat2=new RegExp("2019-09")
}else if(num>10){
    var pat=new RegExp("2019-"+par)
    var pat1=new RegExp("2019-"+(num-1).toString())
    var pat2=new RegExp("2019-"+(num+1).toString())

}else if(num>12){
    var pat=new RegExp("2019-12")
    var pat1=new RegExp("2019-12")
    var pat2=new RegExp("2019-12")
}

tes=[]
tes1=[]
tes2=[]
mon=[]
mon1=[]
mon2=[]

for (var i=0;i<cal.length;i++){
tes.push(pat.test(cal[i].date))
tes1.push(pat1.test(cal[i].date))
tes2.push(pat2.test(cal[i].date))

if(tes[i]==true){mon.push(cal[i])}
if(tes1[i]==true){mon1.push(cal[i])}
if(tes2[i]==true){mon2.push(cal[i])}
}
var d=new Date(mon[0].date)
day=d.getDay()

next()}

var chk=function(req, res, next) {
console.log("par:"+par)
console.log("day:"+day)
console.log(num)
console.log("mon1:"+mon1.length)
next()}

// get
var gcb= function(req, res, next) {

res.render("cal", {
title: par,
    par:par,
    mon:mon,mon1:mon1,mon2:mon2,
    num:num
});
}

router.get('/cal-:id', [getPar,getCal,chk,gcb])
// post

module.exports = router;
