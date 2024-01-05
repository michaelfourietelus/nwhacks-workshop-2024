var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://michaelfourie:Hasie03@cluster0.jvbnlvh.mongodb.net/?retryWrites=true&w=majority';
//UPDATE URL

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Successfully connected to database!");
  db.close();
});