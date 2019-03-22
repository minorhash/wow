var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var i18n = require('i18n-express');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var sess = require('cookie-session');
app.use(
sess({
    name: 'sess',
    keys: ['key1'],
    maxAge: 24 * 60 * 1000, // 1 hour
})
);

//var session = require('express-session');
// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie:{
//   httpOnly: true,
//   secure: false,
//   maxage: 1000 * 60 * 30
//   }
// }));

app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'),
  siteLangs: ["en","ja"],
  textsVarName: 'trans'
}));

// i18n ======================================
var nat=["news","prof","disc","sch","vid","mail"]

for(let i=0;i<nat.length;i++){
app.use(  i18n({    translationsPath: path.join(__dirname, 'i18n/'+nat[i]),
    siteLangs: ['en', 'ja'],    textsVarName: nat[i]  })
);
}

//route
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
var page= require('./routes/page');
app.use('/', page);
var pre= require('./routes/pre');
app.use('/', pre);

var cal= require('./routes/cal');
app.use('/', cal);

var mail= require('./routes/mail');
app.use('/', mail);
var done= require('./routes/done');
app.use('/', done);

// var r404= require('./routes/r404');
// app.use('/', r404);

// adm
var aadm=["index","sel","sel2","out","can","qr"]

for(var i=0;i<aadm.length;i++){
aadm[i]=require('./routes/adm/'+aadm[i]);
app.use('/', aadm[i]);
}

// shop =================================

// var shop = require('./routes/shop/index');
// app.use('/', shop);

// var top=["index","cart","item","his","my","dl","up","tmp"]
// for(var i=0;i<top.length;i++){
// top[i]=require('./routes/shop/'+top[i]);
// app.use('/', top[i]);
// }
//
// top.forEach(function(ite){
// ite=require('./routes/shop/'+ite)
// app.use('/', ite)
// })


// err =================================

var serErr=function (err, req, res, next) {
console.error(err.stack)
res.status(500).render('500',{err:err.stack})
next(err)}
app.use(serErr)

app.use(function(req, res, next) {next(createError(404,err));});

var notErr=function (err, req, res, next) {
console.error(err.stack)
res.status(404).render('404',{err:err.stack})
next(err)}
app.use(notErr)


// app.use(function(req, res, next) {
// next(createError(500));
// });

app.use(function(err, req, res, next) {
    //res.locals.message = err.message;
    //res.locals.error = req.app.get('env') === 'development' ? err : {};

res.status(err.status ).render('404',{
err:err.stack
})
next(err)});

module.exports = app;
