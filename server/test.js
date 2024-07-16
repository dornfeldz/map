const mongoose = require("mongoose");
const Shop = require("./model/Shop");
const connectDB = require("./dbConn");

connectDB();

mongoose.connection.once("open", async () => {
  try {
    const shops = await Shop.find();
    console.log("Shops found:", shops);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    mongoose.connection.close();
  }
});
