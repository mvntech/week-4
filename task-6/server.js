require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// register route
const registerRoute = require("./routes/auth/register");
app.use("/", registerRoute);

// login route
const loginRoute = require("./routes/auth/login");
app.use("/", loginRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
