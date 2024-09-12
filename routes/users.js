const express = require("express");
const router = express.Router();

router.post("/users", (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({ message: "User registered successfully!" });
});

module.exports = router;
