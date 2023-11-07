const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/dados-do-servidor", (req, res) => {
  const data = {
    nodeVersion: process.versions.node,
  };
  res.json(data);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`servidor rodando na port ${port}`);
});
