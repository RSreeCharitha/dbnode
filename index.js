var faker = require('faker')
var mysql      = require('mysql');
var express = require('express');
var app = express();
//console.log(faker.internet.email());
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3309,
  user     : 'dbnode',
  password : 'dbnode',
  database : 'newsletter'
});

app.get('/',function(req,res){
  res.sendFile(__dirname+'/content/index.html')
})

app.listen(8080, function(){
  console.log('App listening on port 8080');
})

 
connection.connect();
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


connection.end();

