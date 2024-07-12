const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

// const corsOptions = {
//   origin: "https://map-backend-tau.vercel.app/",
// };

app.use(cors()); // Use this after the variable declaration

const shopsData = JSON.parse(fs.readFileSync("./data/shops.json", "utf-8"));
console.log(shopsData);

getAllShops = (req, res) => {
  res.status(200).json(shopsData);
};

shopsRouter = express.Router();
shopsRouter.route("/").get(getAllShops);

app.use("/api/v1/shops", shopsRouter);

// app.get("/", (req, res) => {
//   res.json([{ name: "Zoltán" }]);
//   // res.send("Hello world");
// });

app.listen(8000, () => {
  console.log("App is running...");
});

module.exports = app;
