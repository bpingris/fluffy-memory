const express = require("express");
const blog = express.Router();

const db = require("../db");
const uid = require("../helpers/uid");
const ARTICLE_NOT_EXIST = "This article does not exist";

blog.get("/", (_req, res) => {
  const articlesPosts = db.get("articles").value();
  res.send(articlesPosts);
});

blog.get("/:id", (req, res) => {
  const articleID = req.params.id;
  const article = db
    .get("articles")
    .find({ _id: articleID })
    .value();
  if (!article) {
    return res.status(404).send(ARTICLE_NOT_EXIST);
  }
  res.send(article);
});

blog.post("/", (req, res) => {
  const { title, author, content } = req.body;
  if (!title || !author || !content)
    return res.status(401).send("Body not correct.");
  const id = uid();

  try {
    db.get("articles")
      .push({ _id: id, title, author, content })
      .write();
    res.json({ title, author, content, _id: id });
  } catch (error) {
    res.status(500).send(error);
  }
});

blog.delete("/:id", (req, res) => {
  const articleID = req.params.id;
  const articles = db.get("articles");
  const article = articles.find({ _id: articleID });
  if (!article.value()) {
    return res.status(404).send(ARTICLE_NOT_EXIST);
  }
  articles.remove({ _id: articleID }).write();
  res.send("ok");
});

blog.put("/:id", (req, res) => {
  const { title, author, content } = req.body;
  const articleID = req.params.id;

  if (!title || !author || !content)
    return res.status(401).send("Body not correct.");

  const article = db.get("articles").find({ _id: articleID });

  if (!article.value()) {
    return res.status(404).send(ARTICLE_NOT_EXIST);
  }
  try {
    article.assign({ _id: articleID, title, author, content }).write();
    res.send({ _id: articleID, title, author, content });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = blog;
