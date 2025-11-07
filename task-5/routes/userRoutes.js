const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    // extract page and limit from query params with defaults
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    // fetch paginated results
    const users = await User.find().skip(skip).limit(limit);

    // get total count for page info
    const total = await User.countDocuments();

    // return paginated response with metadata
    res.json({
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalUsers: total,
      users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;