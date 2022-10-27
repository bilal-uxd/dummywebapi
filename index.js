"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  if (res) {
    res.status(200).json({
      statusCode: res.statusCode,
      message: "welcome to api",
    });
  }
});

app.listen(port, (err) => {
  if (err) {
    return console.log("error", err);
  }
  console.log(`listening on port ${port}`);
});
