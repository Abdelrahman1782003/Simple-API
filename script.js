const express = require("express");
const app = express();

app.get("/health", (req, res, next) => {
  return res.json({ status: "ok" });
});

app.get("/", (req, res, next) => {
  return res.json({ name: "Task API", version: "1.0", endpoints: ["/tasks"] });
});

app.listen(3000);
