const { MongoClient } = require("mongodb");
const fs = require("fs");

async function run() {
  // Connection URI
  const uri =
    "mongodb+srv://admin:admin@cluster0.z0r9dpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB connection string
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Database and collection
    const database = client.db("MeetingAreaPoint"); // Replace with your database name
    const collection = database.collection("shops"); // Replace with your collection name

    // Read the JSON file
    const data = JSON.parse(
      fs.readFileSync(`${__dirname}/data/shops.json`, "utf8")
    ); // Replace 'data.json' with your JSON file path

    // Insert data into the collection
    if (Array.isArray(data)) {
      // If data is an array of documents
      await collection.insertMany(data);
    } else {
      // If data is a single document
      await collection.insertOne(data);
    }

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data: ", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

run().catch(console.dir);
