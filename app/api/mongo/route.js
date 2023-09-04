import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

// Create a MongoClient instance (connection pooling)
const uri = "mongodb+srv://User_1:WsXZ3DCDhNKRgNha@clusterkhushi.oe7gj0j.mongodb.net/";
const client = new MongoClient(uri);


  try {
    // Connect to the MongoDB client
    // await client.connect();
    if (!client.isConnected()) {
      await client.connect();
    }

    const database = client.db('Khushi');
    const movies = database.collection('inventory');

    // Define your query here
    const query = { };
    const movie = await movies.findOne(query);
    console.log(movie);
    return NextResponse.json({"a":34})


  } finally {
    // Close the client connection
    await client.close();
  }
}


