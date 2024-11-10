const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Hardware Store API listening at http://localhost:${port}`);
});
