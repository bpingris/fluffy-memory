const express = require("express");
const app = express();

const blog = require("./routes/blog");

const db = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.use("/blog", blog);

app.listen(3001, () => console.log("Server started on port 3001."));
