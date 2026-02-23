const express = require("express");
const app = express();
#///DeviceID:KoneksiID///#
app.get("/", (req, res) => {
  const data = [
    "169.d.83.107:192.d.100.101"
  ];

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server berjalan pada port 3000");
});
