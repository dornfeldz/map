const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const connectDB = require("./dbConn");
const Shop = require("./model/Shop");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const shopsData = JSON.parse(
  fs.readFileSync(`${__dirname}/data/shops.json`, "utf-8")
);
// console.log(shopsData);

getAllShops = async (req, res) => {
  // res.status(200).json(shopsData);
  try {
    const shops = await Shop.find();
    console.log(shops);
    res.json(shops);
  } catch (error) {
    console.log(error);
  }
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

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
  app.listen(8000, () => {
    console.log("App is running...");
  });
});

module.exports = app;
