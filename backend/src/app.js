require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "nexuscart-backend",
    uptime: process.uptime()
  });
});

app.get("/", (req, res) => {
  res.send("NexusCart Backend Running");
});

module.exports = app;
