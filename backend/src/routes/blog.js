const express = require("express");

const blog = express.Router();

blog.get("/", (req, res) => {
  res.send("fdp lel");
});

module.exports = blog;
