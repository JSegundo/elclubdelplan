const mongoose = require("mongoose");
const events = require("../utils/fakeEvents");
const EventModel = require("../models/Events");

const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost/clubDelPlan");
    console.log("db levantada");
    await EventModel.insertMany(events);
    console.log("eventos seedeados");
  } catch (error) {
    console.log("error en la db");
  }
};

db();
