const express = require("express");

const { handleMessage } = require("../controllers/message.controller");
const router = express.Router();

router.post("/message", handleMessage);

module.exports = router;
