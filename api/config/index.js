const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb+srv://clubdelplan:clubdelplan123@clubdelplan.kf2p2.mongodb.net/test");
    console.log("db levantada");
  } catch (error) {
    console.log("error en la db");
  }
};

db();
