const MongoClient = require("mongodb").MongoClient;

export const client = new MongoClient(process.env.MONGO_URI);

export const db = client.db("blogProject");
