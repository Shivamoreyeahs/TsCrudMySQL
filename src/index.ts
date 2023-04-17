import express from 'express';
// import bodyParser from 'body-parser';

import connection from '../src/database/db'
import {router} from '../src/controllers/userController';

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


app.use('/',router);
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to database successfully...");
//   });

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database successfully...");
  // connection.query("CREATE DATABASE TSCRUDMYSQL", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });
});


app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})  