const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const connectDB = require("./dbConn");
const Shop = require("./model/Shop");
const createSampleDocument = require("./utils");

connectDB();
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();
app.use(cors());
app.use(express.json());

getAllShops = async (req, res) => {
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
