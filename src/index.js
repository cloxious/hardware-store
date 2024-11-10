const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Hardware Store API listening at http://localhost:${port}`);
});
