const fs = require('fs');
const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"
let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.log(err.message);
    throw err
  } else {
    console.log("Connected to the SQLite Database.")
  }
})

module.exports = db;
