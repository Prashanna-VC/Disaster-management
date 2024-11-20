const { default: mongoose } = require("mongoose");

const db = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/disaster")
      .then((res) => console.log("connected"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
