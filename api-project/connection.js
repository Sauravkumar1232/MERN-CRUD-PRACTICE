const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/home-practice");
    console.log("DB connected");
  } catch {
    console.log("error");
  }
};
module.exports = connect;
