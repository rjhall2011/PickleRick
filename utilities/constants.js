const DB_NAME = process.env.DB_NAME
const JWT_SECRET = process.env.JWT_SECRET
const JWT_ISSUER = process.env.JWT_ISSUER

module.exports = {
    DB_NAME,
    JWT_ISSUER,
    JWT_SECRET,
}