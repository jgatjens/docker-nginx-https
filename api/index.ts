import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from EXPRESS !");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
