import express from "express";
import databaseConnection from "./config/db";

const app = express();

databaseConnection();

app.use(express.json());
app.use("/api");

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
