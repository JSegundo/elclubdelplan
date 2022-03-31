const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost/clubDelPlan");
    console.log("db levantada");
  } catch (error) {
    console.log("error en la db");
  }
};

db();
