const express = require("express");
const app = express();

let TASKS = [
  { id: 1, title: "Study backend.", done: true },
  { id: 2, title: "Create APIs.", done: true },
  { id: 3, title: "Create a REST API site.", done: false },
];

app.get("/tasks/:id", (req, res, next) => {
  const taskId = Number(req.params.id);
  const task = TASKS.filter((task) => task.id === taskId);
  if (task.length != 0) {
    return res.json(task);
  } else {
    res.status(404);
    return res.json({ error: `Task ${taskId} not found` });
  }
});

app.get("/tasks", (req, res, next) => {
  return res.json(TASKS);
});

app.get("/health", (req, res, next) => {
  return res.json({ status: "ok" });
});

app.get("/", (req, res, next) => {
  return res.json({ name: "Task API", version: "1.0", endpoints: ["/tasks"] });
});

app.listen(3000);
