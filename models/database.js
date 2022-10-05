const { Sequelize } = require("sequelize");
const db = new Sequelize("dockerExpressDemo", "postgres", "postgres", {
  host: "db",
  dialect: "postgres",
});

module.exports = { db };
