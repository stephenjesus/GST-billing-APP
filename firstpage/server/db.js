const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'products'
});
 
connection.connect(function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("connected to db");
    }
})

module.exports = connection;
 