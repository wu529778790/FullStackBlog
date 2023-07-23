const express = require("express");
const ViteExpress = require("vite-express");

const app = express();

app.get("/api/test", (req, res) => {
  res.json({
    data: "Hello Vite + Vue + Express!",
    success: true
  });
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
