import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Test server running!");
});

app.listen(4000, () => {
  console.log("Test server running at http://localhost:4000");
});