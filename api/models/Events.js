const { Schema, model } = require("mongoose");

const EventSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default: "//add random img",
  },

  startDate: { type: Date },
  endDate: { type: Date },
  paymentDay: { type: Date },
  
  time: { type: String },
  location: {
    type: String,
  },
  isPrivate: {
    type: Boolean,
    default: true,
  },
  totalPrice: Number,

  category: { type: String }, // --> ref to Category schema
  eventOwner: { type: Schema.ObjectId, ref: "User" }, //--> ref to User schema
});

const EventModel = model("Event", EventSchema);

module.exports = EventModel;
