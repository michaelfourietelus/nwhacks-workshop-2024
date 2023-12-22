var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://username:pw@cluster0.db.mongodb.net/';
//UPDATE URL

MongoClient.connect(url, function(err, db) {
  console.log("Starting create mongo");
  if (err) throw err;
  console.log("Successfully connected to database!");
  db.close();
});