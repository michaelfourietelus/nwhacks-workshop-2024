var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
//UPDATE URL

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Successfully connected to database!");
  db.close();
});