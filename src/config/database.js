const sequelize = require("sequelize");

// Struktur koneksi Sequelize
/*
const db = new sequelize("nama database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});
*/

const db = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

module.exports = db;
