const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hardware Store API");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Hardware Store API listening at http://localhost:${port}`);
});
