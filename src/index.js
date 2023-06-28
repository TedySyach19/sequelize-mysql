const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "berhasil",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running [PORT = ${PORT}]`);
});
