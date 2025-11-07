const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json({ savedUser, displayName: savedUser.getDisplayName() });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;