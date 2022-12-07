
const { db } = require("./database")

const ShowCategories = db.define("ShowCategories");
const ShowDevelopers = db.define("ShowDevelopers");
const ShowSeasons = db.define("ShowSeasons");
const UserCategories = db.define("UserCategories");


module.exports = {
    ShowCategories,
    ShowDevelopers,
    ShowSeasons,
    UserCategories,
};