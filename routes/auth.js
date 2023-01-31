const express = require("express");

const { signin } = require("./controllers/auth");

const router = express.Router();

//signin
router.route("/signin").post(signin);

module.exports = router;