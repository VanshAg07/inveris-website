const express = require("express");
const cors = require("cors");
const contactRouter = require("./routes/contact");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL
      ? process.env.CLIENT_URL.split(",")
      : ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRouter);

app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

module.exports = app;
