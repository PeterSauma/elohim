const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiController");

router.post("/checkout", apiController.checkout);

module.exports = router;
