const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { name, email, contactNumber, message } = req.body;

    if (!name || !email || !contactNumber || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = new Contact({ name, email, contactNumber, message });
    await newContact.save();

    res.status(200).json({ message: "Contact form submitted successfully." });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

module.exports = router;
