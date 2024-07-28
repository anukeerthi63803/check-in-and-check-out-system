// Import the MongoDB Node.js driver
const { MongoClient } = require('mongodb');

// Replace <YOUR_CONNECTION_STRING> with your MongoDB Atlas connection string
const uri = "mongodb+srv://anukeerthi:anu%402002@project.0z79c3l.mongodb.net/";

async function retrieveData() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('Project');
    const collection = database.collection('Students');

    const documents = await collection.find().toArray();

    console.log('Retrieved documents:');
    console.log(documents);
  } finally {
    client.close();
  }
}

retrieveData().catch(console.error);
