//const faker = require('faker')
const mysql = require('mysql');
const express = require('express');
const bp = require('body-parser');
var app = express();
//console.log(faker.internet.email());
app.set("view engine", "ejs");
app.use(bp.urlencoded({extended: true}))
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3309,
  user     : 'dbnode',
  password : 'dbnode',
  database : 'newsletter'
});
//connection.connect();
var q = 'select count(*) as count from users';
var count=0;
app.get('/',function(req,res){
  //res.sendFile(__dirname+'/content/index.html')
    connection.query(q, function (error, results, fields) {
      if (error) throw error;
      count = results[0].count;
      //console.log('The solution is: ', results);
      //res.send(count + ' people have joined us already!');
      res.render('home',{num: count})
  });
});

app.post('/thankyou',function(req,res){
      console.log(req.body);
      var user = {
        email: req.body.email,
        fname: req.body.fname,
        lname: req.body.lname
      };
      var q = "insert into users set ?"
      connection.query(q, user, function (error, results, fields) {
        if (error) throw error;
        console.log(results);      
        res.redirect('/');
});
});

app.listen(8080, function(){
  console.log('App listening on port 8080');
})
//var q = 'SELECT curtime() as time, curdate() as date, now() as now'
{
/*Insertin into table ---------------------------------
var q = 'select * from users'
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
-------------------------------- 
var user = {
  email: faker.internet.email(),
  fname: faker.name.firstName(),
  lname: faker.name.lastName(),
  joindate: faker.date.past()
}
console.log(user);


-----------------added 300 fake entries---------------------
var data=[];
for(var i=0;i<300;i++){
  data.push([faker.internet.email(), faker.name.firstName(), faker.name.lastName(), faker.date.past()]);
}
var q = "insert into users(email, fname, lname, joindate) values ?"

connection.query(q, [data], function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
--------------------------------------------------------------
*/
}
//connection.end();