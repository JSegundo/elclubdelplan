const { Schema, model } = require("mongoose");

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "//add random img",
  },
  date: {
    startDate: Date,
    endDate: Date,
    paymentDay: Date,
  },
  private: {
    type: Boolean,
    default: true,
  },
  totalPrice: Number,
  category: {
    type: String,
    required: true,
  },
  eventOwner: [{ type: Schema.ObjectId, ref: "User" }],
  // ref: "User", //--> reference to the user model
});

const EventModel = model("Event", EventSchema);

module.exports = EventModel;
