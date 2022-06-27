const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const serverless = require("serverless-http");

app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port: ... ${port}`);
});

module.exports = app;
module.exports.handler = serverless(app);
