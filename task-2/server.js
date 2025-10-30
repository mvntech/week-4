require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse json
app.use(express.json());

// connect to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// route to test connection
app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center;'>Hello from Express and MongoDB Atlas!</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
