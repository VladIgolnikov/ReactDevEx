const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'assets.db');

const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    console.error('ERROR >> could not connect to ReactDevEx DB', err.message);
  } else {
    console.log('<< Connected to ReactDevEx DB >>');
  }
});

module.exports = db;
