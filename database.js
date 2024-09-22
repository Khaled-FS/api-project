const mongoose = require("mongoose");

require("dotenv").config();
const mongoURL = process.env.MONGO_DB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);

    console.log("DB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
module.exports = connectDB;
