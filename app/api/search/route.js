import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
const query=request.nextUrl.searchParams.get("query")

// Create a MongoClient instance (connection pooling)
const uri = "mongodb+srv://User_1:WsXZ3DCDhNKRgNha@clusterkhushi.oe7gj0j.mongodb.net/";
const client = new MongoClient(uri);


  try {
    // Connect to the MongoDB client
    //await client.connect();
    if (!client.isConnected()) {
      await client.connect();
    }

    const database = client.db('Khushi');
    const inventory = database.collection('inventory');

    // Define your query here
    const products = await inventory.aggregate([{
        $match:{
            $or:[
                {slug: {$regex: query ,$options:"i"}}
            ]
        }
    }]).toArray()
    return NextResponse.json({success: true , products})


  } finally {
    // Close the client connection
    await client.close();
  }
}





    