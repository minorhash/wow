const express = require("express");
const router = express.Router();
// == sess =============================
const db = require("cardb");
const adb = require("usrdb");
let allmer = db.allMer();
let email="", pss="", usr="";
let mailusr="";

// === login ============================
const cred = require("./js/cred");

// === get ============================

const getEma = (req, res, next)=> {
  email = cred.ema(req);
  mailusr = adb.mailUsr(email);
  next();
};

const getUsr = function(req, res, next) {
  if (mailusr) {
    usr = mailusr.name;
  } else {
    usr = null;
    console.log("no usr");
  }
  next();
};

const chk = function(req, res, next) {
  console.log("=== get shop ===");
  console.log(email);
  console.log(usr);
  console.log(mailusr);
  next();
}; // chkEma

const gcb = function(req, res) {
  res.render("shop", {
    title: "shop",
    mer: allmer,
    usr: usr
  });
};
router.get("/shop", [getEma, getUsr, chk, gcb]);

// == post ==================================

const getCok = function(req, res, next) {
if (req.body) {
email = req.body.email;
pss = req.body.pss;
} else {console.log("no req.body");}

if (email) {
mailusr = adb.mailUsr(email);
} else {      console.log("no email");    }

if (mailusr.email === req.body.email && mailusr.pss === req.body.pss) {
req.session.email = req.body.email;
req.session.pss = req.body.pss;
} else {console.log("wrong");}

next();
}; // getCok

const posUsr = function(req, res, next) {
if (mailusr.email === req.body.email && mailusr.pss === req.body.pss) {
usr = mailusr.name;
} else {        console.log("wrong cred");      }

  next();
}; // getUsr

const rcb = function(req, res) {
const obj = { usr: usr, mer: allmer };
res.render("shop", obj);
};

const arr=[getCok, posUsr, chk, rcb];

router.post("/shop",arr);
module.exports = router;
