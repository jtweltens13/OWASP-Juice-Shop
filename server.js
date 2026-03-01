const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Serve static files from this directory (index.html, css, etc.)
app.use(express.static(__dirname));

// Explicitly serve index.html at /
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  console.log("Serving:", filePath);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("sendFile error:", err);
      res.status(500).send("Failed to load index.html");
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: "Fields cannot be empty" });
  if (!email.includes("@")) return res.status(400).json({ error: "Invalid email format" });
  if (password.length < 8) return res.status(400).json({ error: "Password too short" });

  return res.json({ message: "Server-side validation passed" });
});

app.listen(3000, () => console.log("Server running on port 3000"));