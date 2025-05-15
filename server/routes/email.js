const express = require("express");
const router = express.Router();
const Email = require("../models/Email");


router.post("/submit-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(200).json({ message: "Email saved successfully" });
  } catch (error) {
    console.error("❌ Email save error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
