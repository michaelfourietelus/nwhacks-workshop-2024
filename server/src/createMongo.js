var MongoClient = require('mongodb').MongoClient;
var url = 'add your own url here';

MongoClient.connect(url, function(err, db) {
  console.log("Starting create mongo");
  if (err) throw err;
  console.log("Successfully connected to database!");
  db.close();
});