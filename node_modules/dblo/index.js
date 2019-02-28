var Database = require('better-sqlite3');
var db = new Database(__dirname+'db/blo.db');

// === log ===
exports.typLog=function(arg2){
var stm=db.prepare('select * from blo where type=?');
try{var row=stm.all(arg2);
}catch(err){console.log(err);}
return row;
};

exports.allLog=function(){
var stm=db.prepare('select * from blo');
var row=stm.all();
return row;
};

exports.terLog=function(ter){
var stm=db.prepare('select * from blo where term=?');
try{var row=stm.get(ter);
}catch(err){console.log(err);}
return row;
};



