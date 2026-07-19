const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let TASKS = [
  { id: 1, title: "Study backend.", done: true },
  { id: 2, title: "Create APIs.", done: true },
  { id: 3, title: "Create a REST API site.", done: false },
];

app.use(bodyParser.json());
app.post("/tasks", (req, res, next) => {
  let newTask = req.body;
  console.log(newTask);
  if (newTask && newTask.title) {
    let newId = TASKS[TASKS.length - 1].id + 1;
    newTask.id = newId;
    newTask.done = false;
    TASKS.push(newTask);
    res.status(201);
    return res.json({ message: "Created!", task: newTask });
  }
  res.status(400);
  return res.json({ message: "Invalid title." });
});

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
