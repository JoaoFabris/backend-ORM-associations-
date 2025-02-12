// src/app.js

const express = require("express");

const account = require("./controllers/accountsController");
const comment = require("./controllers/commentController");

const app = express();

app.use(express.json());

app.post("/accounts", account.saveAccountAndProfile);
app.post("/account/:id/comment", comment.saveComment);
app.get("/account", account.getAll);
app.get("/account/:id", account.getById);
app.get("/account-v2/:id", account.getAccountByIdLazy);
app.get("/account/:id/comments", comment.getCommentByAccountId);
app.get("/comments", comment.getAllComments);

module.exports = app;
