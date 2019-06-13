// https://dzone.com/articles/change-streams-with-mongodb

const MongoClient = require("mongodb").MongoClient;

const pipeline = [{ $project: { documentKey: false } }];

MongoClient.connect("mongodb://localhost:27017/?replicaSet=rs0").then(
  client => {
    console.log("Connected correctly to server");
    // specify db and collections
    const db = client.db("myDB");
    const collection = db.collection("messages");
    console.log(MongoClient);
    const changeStream = collection.watch(pipeline);
    // start listen to changes
    changeStream.on("change", function(change) {
      console.log(JSON.stringify(change));
    });
  }
);
