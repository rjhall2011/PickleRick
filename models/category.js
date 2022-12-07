const { DataTypes } = require("sequelize");
const { db } = require("./database");

const Category = db.define(
    "Category",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isIn: [
                    [
                        "action",
                        "adult sitcom",
                        "survival",
                        "adult animation",
                        "story telling",
                        "science Fiction",
                        "mad scientist",
                        "multiverse",
                        "personal charateristic",
                        "family",
                        "episodes",
                        "special characters",
                    ],
                ],
            },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = { Category}