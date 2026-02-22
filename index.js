const express = require("express");
const app = express();
#///DeviceID:KoneksiID///#
app.get("/", (req, res) => {
  const data = [
    "192.168.100.101:169.254.83.107"
  ];

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server berjalan pada port 3000");
});
