const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.DB_URI;

const connectDB = async () => {
  try {
    console.log(typeof URI);
    await mongoose.connect(URI);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
