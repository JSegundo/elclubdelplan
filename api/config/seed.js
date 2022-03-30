const events = require("../utils/fakeEvents");
const EventModel = require("../models/Events");
const mongoose = require("mongoose");

const seedDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost/clubDelPlan");
    await EventModel.insertMany(events);
    console.log("seed finalizado");
  } catch (error) {
    console.log(error);
  }
};

seedDb();
