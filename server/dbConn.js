const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
