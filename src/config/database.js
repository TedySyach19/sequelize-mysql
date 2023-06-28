const Sequelize = require("sequelize");
require("dotenv").config();
// Struktur koneksi Sequelize
/*
const db = new sequelize("nama database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});
*/
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

module.exports = db;
