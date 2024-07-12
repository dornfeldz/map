const express = require("express");
const fs = require("fs");

const app = express();

// const shopsData = JSON.parse(fs.readFileSync("./data/shops.json", "utf-8"));
// console.log(shopsData);

// getAllShops = (req, res) => {
//   res.status(200).json(shopsData);
// };

// shopsRouter = express.Router();
// shopsRouter.route("/").get(getAllShops);

// app.use("/api/v1/shops", shopsRouter);

app.get("/", (req, res) => {
  res.json([{ name: "Diezel" }]);
  // res.send("Hello world");
});

// app.listen(8000, () => {
//   console.log("App is running...");
// });

module.exports = app;
