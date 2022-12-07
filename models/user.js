const { user } = require("pg/lib/defaults");
const { DataTypes, STRING } = require("sequelize");
const { db } = require("./database");

const RickCategories = db.define("RickCategories")
const MortyCategories = db.define("MortyCategories")
const SummerCategories = db.define("SummerCategories")
const JerryCategories = db.define("JerryCategories")
const BethCategories = db.define("BethCategories")

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: DataTypes.STRING,
    characterUsername: DataTypes.STRING

  },

);

module.exports = { User };
