const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Email = require("./models/Email"); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo error:", err));

// Routes
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

app.post("/submit-email", async (req, res) => {
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

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
