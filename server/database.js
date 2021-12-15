const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "../DB/users.db";


const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
      }else{
          console.log('Connected to the SQLite database.')
          db.run(`CREATE TABLE users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name text, 
              email text UNIQUE, 
              registration_date text
              )`,
          (err) => {
              if (err) {
                  // Table already created
                console.log('The table exists');
              }else{
                  // Table just created, creating some rows
                let insert = 'INSERT INTO users (name, email, registration_date) VALUES (?,?,?)'
                db.run(insert, ["Lily Colins","Lily.colins@example.com", "12/12/20"])
                db.run(insert, ["Jone Doe","jon.dow@gmail.com", "21/11/20"])
              }
          });
      }
});

module.exports = db;


