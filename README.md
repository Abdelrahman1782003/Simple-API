# Simple API — Tasks API

A simple RESTful API built with **Node.js** and **Express.js**, created as a beginner project to practice core backend concepts. This project was originally made as an assignment for the Flyrank AI Backend Path internship.

The API lets you create, read, update, and delete ("CRUD") tasks, and ships with interactive Swagger documentation.

## Features

- Basic CRUD operations for tasks (`GET`, `POST`, `PUT`, `DELETE`)
- Built with Express 5
- Request body parsing via `body-parser`
- Interactive API docs powered by `swagger-ui-express` and an `openapi.json` spec

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) `^5.2.1`
- [body-parser](https://www.npmjs.com/package/body-parser) `^2.3.0`
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) `^5.0.1`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (includes npm) installed on your machine

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Abdelrahman1782003/Simple-API.git
   cd Simple-API
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the server
   ```bash
   node script.js
   ```

By default the server runs at:

```
http://localhost:3000
```

## API Documentation

This project includes an OpenAPI 3.0 spec (`openapi.json`) served through Swagger UI. Once the server is running, you can explore and test the API interactively (check `script.js` for the exact docs route, typically something like `/api-docs`).

## Endpoints

Base path: `/Tasks`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/Tasks` | Returns a list of all tasks |
| `POST` | `/Tasks` | Creates a new task |
| `PUT` | `/Tasks` | Edits an existing task |
| `DELETE` | `/Tasks` | Deletes a task |

### Response Codes

- `200` — Successful `GET` or `PUT` request
- `201` — Task successfully created
- `204` — Task successfully deleted
- `400` — Invalid data submitted
- `404` — Task ID not found

## Project Structure

```
Simple-API/
├── openapi.json       # OpenAPI/Swagger specification
├── package.json        # Project dependencies
├── package-lock.json
├── script.js            # Express server & API logic
└── .gitignore
```

## Purpose

This repository was built to apply beginner-level knowledge of Node.js and Express.js — practicing routing, middleware, request handling, and API documentation with Swagger.

## License

No license specified.
