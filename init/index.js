require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:");
    console.error(err);
  });

async function main() {
  await mongoose.connect("mongodb+srv://shrawansaw89_db_user:2a51Z5SfUx1OrwHi@wanderlust-cluster.snc6qy6.mongodb.net/?appName=wanderlust-cluster");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6890a273c5516e265ad79ae9",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initalize");
};

initDB();
