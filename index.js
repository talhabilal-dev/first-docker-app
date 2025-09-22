import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello, World from Container!",
    service: "First App Service",
    time: new Date().toISOString(),
  });
});

app.get("/readyz", (req, res) => {
  res.send("OK");
});

app.get("/healthz", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});