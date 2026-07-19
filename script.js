const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.json({ msg: "hello!!" });
});

app.listen(3000);
