const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("/", auth, (req, res) => {});

router.get("/", (req, res) => {});

module.exports = router;
