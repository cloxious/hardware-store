const mongoose = require("mongoose");

const db = mongoose
  .connect("mongodb://localhost:27017/hardware_store")
  .then(() => console.log("Connection to database established"))
  .catch((err) => console.error("Connection to database failed:", err));

module.exports = db;
