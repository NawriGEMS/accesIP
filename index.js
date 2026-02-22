const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const data = [
    "100.107.45.35:192.168.56.1"
  ];

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server berjalan pada port 3000");
});
