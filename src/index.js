const express = require("express");
const db = require("./config/database");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

(async () => {
  try {
    await db.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
})();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running [PORT = ${PORT}]`);
});
