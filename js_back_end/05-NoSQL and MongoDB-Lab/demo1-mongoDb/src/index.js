const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

async function start() {
    const connectionStr = 'mongodb://localhost:27017';
    const client = new MongoClient(connectionStr);

    await client.connect();

    const db = client.db('local');
    const collection = db.collection('startup_log');
    const cursor = collection.find({});
    const results = await cursor.toArray();

    console.log(results);
}

start();
