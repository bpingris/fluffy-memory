const express = require("express");
const app = express();

const blog = require("./routes/blog");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (_req, res) => res.send("pong"));

app.use("/blog", blog);

module.exports = app;
