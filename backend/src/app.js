const morgan = require("morgan");
const express = require("express");
const app = express();

const blog = require("./routes/blog")

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("tiny"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/ping", (_req, res) => res.send("pong"));

app.use("/blog", blog);

module.exports = app;
