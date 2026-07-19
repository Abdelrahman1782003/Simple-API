const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");

let TASKS = [
  { id: 1, title: "Study backend.", done: true },
  { id: 2, title: "Create APIs.", done: true },
  { id: 3, title: "Create a REST API site.", done: false },
];

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.delete("/tasks/:id", (req, res, next) => {
  const taskId = Number(req.params.id);
  let taskIndex = TASKS.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) {
    res.status(404);
    return res.json({ message: "selected task was not found." });
  }
  TASKS.splice(taskIndex, 1);
  res.status(204);
  return res.json({ message: "Task deleted!" });
});

app.put("/tasks/:id", (req, res, next) => {
  const taskId = Number(req.params.id);
  let selectedTask = TASKS.filter((task) => task.id === taskId);
  if (!selectedTask.length <= 0) {
    const edits = req.body;
    if (edits?.title != "" || edits?.done != null) {
      edits.title
        ? (selectedTask.title = edits.title)
        : edits.done
          ? (selectedTask.done = done)
          : "";
      edits.done ? (selectedTask.done = edits.done) : "";

      res.status(200);
      return res.json({ message: "task updated!" });
    }
    res.status(400);
    return res.json({ message: "invalid values" });
  }
  res.status(404);
  return res.json({ message: "task selected was not found." });
});

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
