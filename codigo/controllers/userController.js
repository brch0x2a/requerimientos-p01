var controller = {};
var sqlite3       = require('sqlite3');
const bcrypt      = require('bcrypt');
var ssn= {id:0, email:'', rango:0};

newConn = ()=>{
    var dbPath = '/home/brch/Documents/BK/Documents/Dev/web/node-lab/req-p01/bd/demo';
    var db = new sqlite3.Database(dbPath, (err) => {
        if (err) {  console.log('Could not connect to database', err)}
        else {      console.log('Connected to database')}});
    return db;
};
closeConn = (db)=>{
    db.close((err)=>{
        if(err){console.log(err);}
        else{
            console.log('Close Conn');
        }
    });
}

controller.login = (req, res, next)=>{

    const data = req.body;
    console.log('ssn.id: '+ssn.id);
    res.render('home');
}

controller.newAccount = (req, res, next)=>{
  const data = req.body;
  const saltRounds = 10;
  const myPlaintextPassword = data.pass;

  const db = newConn();


  console.log(data);

  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {

  db.run(`insert into user(fname, lname, email, pass) values(?, ?, ?, ?)`,
   [data.fname, data.lname, data.email, hash]);
   closeConn(db);
 });
  console.log("test module flag");
  res.render('test');
}

module.exports = controller;
