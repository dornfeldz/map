const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

const shopsData = JSON.parse(fs.readFileSync("./data/shops.json", "utf-8"));
// console.log(shopsData);

getAllShops = (req, res) => {
  res.status(200).json(shopsData);
};

shopsRouter = express.Router();
shopsRouter.route("/").get(getAllShops);

app.use("/shops", shopsRouter);

app.listen(8000, () => {
  console.log("App is running...");
});

module.exports = app;
