const mongoose = require('mongoose');

const URI = "mongodb+srv://josemiguelcpcs:@skatespots.ljna7ee.mongodb.net/?retryWrites=true&w=majority&appName=skatespots";
const CLIENT_OPTIONS = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function test() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(URI, CLIENT_OPTIONS);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return true
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
    return false
  }
}

test().catch(console.dir);