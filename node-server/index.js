const express = require("express");
const app = express();
const port = process.env.NODE_SERVER_PORT;

app.get("/", (req, res) => res.send("Sample node app!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
