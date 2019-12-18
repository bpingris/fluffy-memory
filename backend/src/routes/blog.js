const express = require("express");

const blog = express.Router();

blog.get("/", (req, res) => {
  res.send("fdp lel");
});

blog.post("/", (req, res) => {
  const { title, author, content } = req.body;
  if (!title || !author || !content) return res.status(401).send("Body not correct.");
  res.json({ title, author, content });
});

module.exports = blog;
