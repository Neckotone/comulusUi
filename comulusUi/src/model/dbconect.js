const sqlite3 = require('sqlite3').verbose();
const path =  require('path');

function dbsql(){
  return new sqlite3.Database(path.resolve(__dirname, './configs.db3'), (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the configs database.');
  });
}

module.exports ={
    dbsql
}