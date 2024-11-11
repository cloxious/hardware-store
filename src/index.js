const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Hardware Store API listening at http://localhost:${port}`);
});
