const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    message: "Server is healthy 🚀"
  });
});

// Example root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});