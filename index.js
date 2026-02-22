const express = require("express");
const app = express();
#///DeviceID:KoneksiID///#
app.get("/", (req, res) => {
  const data = [
    ""
  ];

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server berjalan pada port 3000");
});
