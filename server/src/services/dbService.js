const MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;
const url = 'mongodb+srv://username:pw@cluster0.db.mongodb.net/';
// UPDATE URL

const client = new MongoClient(url);

const addValueToDb = async (day, hours, score) => {
  const insert = async (value) => {
    try {
      await client.connect();
      const database = client.db("mydb");
      const sleeps = database.collection("sleeps");

      const doc = { day: day, hours: hours, score: score };
      const result = await sleeps.insertOne(doc);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      return result;
    } finally {
      await client.close();
    }
  };
  const result = await insert(value);
  return result;
};

const updateValueInDb = async (id, day, hours, score) => {
  const update = async (id, day, hours, score) => {
    try {
      await client.connect();
      const database = client.db("mydb");
      const sleeps = database.collection("sleeps");
      console.log(typeof id);

      const filter = { _id: ObjectID(id) };
      const options = { upsert: false };
      const updateDoc = {
        $set: {
          day: day,
          hours: hours,
          score: score,
        },
      };
      const result = await sleeps.updateOne(filter, updateDoc, options);
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
      );
      return result;
    } finally {
      await client.close();
    }
  };
  const result = await update(id, day, hours, score);
  return result;
};

const deleteValueFromDb = async (id) => {
  const deleteValue = async (id) => {
    try {
      await client.connect();
      const database = client.db("mydb");
      const sleeps = database.collection("sleeps");
      console.log(id);

      const query = { _id: ObjectID(id) };

      const result = await sleeps.deleteOne(query);
      console.log(`${result.deletedCount} document(s) deleted`);
      return result;
    } finally {
      await client.close();
    }
  };
  const result = await deleteValue(id);
  return result;
};

const getAllValuesFromDb = async () => {
  const getAll = async () => {
    try {
      await client.connect();
      const database = client.db("mydb");
      const sleeps = database.collection("sleeps");

      const query = {};
      const options = { projection: { _id: 1, day: 1, hours: 1, score: 1 } };
      const cursor = sleeps.find(query, options);
      const result = [];
      await cursor.forEach((entry) => {
        console.log(entry);
        result.push(entry);
      });
      return result;
    } finally {
      await client.close();
    }
  };
  const result = await getAll();
  return result;
};

module.exports = {
  addValueToDb,
  getAllValuesFromDb,
  updateValueInDb,
  deleteValueFromDb,
};
