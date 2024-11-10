const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/hardware_store");
    console.log("Connection to database established");
  } catch (error) {
    console.error("Connection to database failed");
    console.error(error);
    process.exit(1);
  }
};
