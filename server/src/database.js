import mysql from 'mysql'
import dotenv from 'dotenv'


dotenv.config();

const {
    MYSQL_HOST,
    MYSQL_DB,
    MYSQL_USER,
    MYSQL_PASSWORD
  } = process.env;

const db = mysql.createConnection({
    user:MYSQL_USER,
    host:MYSQL_HOST,
    password:MYSQL_PASSWORD,
    database:MYSQL_DB
});


db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

export default db;