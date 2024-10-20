const express = require("express");

const { handleMessage } = require("../controllers/message.controller");
const { chatCloud } = require("../controllers/llma.controller");
const router = express.Router();

router.post("/message", handleMessage);
router.get("/llma", chatCloud);

module.exports = router;
