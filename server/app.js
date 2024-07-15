const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

const shopsData = JSON.parse(
  fs.readFileSync(`${__dirname}/data/shops.json`, "utf-8")
);
// console.log(shopsData);

getAllShops = (req, res) => {
  res.status(200).json(shopsData);
};

createShop = (req, res) => {
  console.log("createShop");
};

deleteShop = (req, res) => {
  console.log("deleting shop");
};

shopsRouter = express.Router();
shopsRouter.route("/").get(getAllShops).post(createShop).delete(deleteShop);

app.use("/shops", shopsRouter);
app.listen(8000, () => {
  console.log("App is running...");
});

module.exports = app;
