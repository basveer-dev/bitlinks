import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  // Check if the short url exists

  const doc = await collection.findOne({ shorturl: body.shorturl });
  if (doc) {
    return NextResponse.json({
      success: false,
      error: true,
      message: "Short URL already exists",
    });
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });

  return NextResponse.json({
    success: true,
    error: false,
    message: "URL generated successfully",
  });
}
