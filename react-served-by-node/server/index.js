const express = require("express");
const app = express();
const port = process.env.NODE_SERVER_PORT || 8000;

// In production, we serve from public dir
if (process.env.ENVIRONMENT === "prod") {
  app.use(express.static("public"));
}

app.get("/api/data", (req, res) => {
  const data = [1, 2, 3, 4];
  res.send(data);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
