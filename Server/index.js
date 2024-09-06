import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.status(200).json({"flavorName": "Strawberry",
        "count": 50});
});
app.post("/", (req, res) => {
    res.status(200).json({"flavorName": "Strawberry",
          "count": 60});
  });
app.listen(port, () => {
  console.log(`server is listening from port : ${port}...`);
});
