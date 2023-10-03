const { OpenTelemetryMiddleware } = require("./app");
const express = require("express");

const app = express();
app.use(OpenTelemetryMiddleware);

app.get("/validate", (req, res) => {
  res.send("Validate OK!");
});

app.post("/validate", (req, res) => {
  res.send("Validate OK!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
