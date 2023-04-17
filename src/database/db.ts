
import mysql from 'mysql';


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Shivam@5544",
    database:'TSCRUDMYSQL'
  });

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });


  export default connection;