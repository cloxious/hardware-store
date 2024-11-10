const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection to database established");
  } catch (error) {
    console.error("Connection to database failed");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
