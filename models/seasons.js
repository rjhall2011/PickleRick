const { DataTypes } = require("sequelize");
const {db} = require("./database");

const Seasons = db.define(
    "episode",
    {
    episodeName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }, 
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,d
    },
    relaseYear: {
        type: DataTypes.INTEGER,
        validate: {
            min: 2013,
            max: 2023
        },
    },
    publishedDate:  DataTypes.DATEONLY,
    minDate: {
        type: DataTypes.INTEGER,
    }
    }

)