const { Schema, model } = require("mongoose")

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
  pricePerPerson: {
    type: Number,
  },

  category: { type: String }, // --> ref to Category schema
  eventOwner: { type: Schema.ObjectId, ref: "User" }, //--> ref to User schema
  coments: [{
    userName: { type: String },
    vote: { type: Number },
    coment: { type: String }
  }]
})

const EventModel = model("Event", EventSchema)

module.exports = EventModel
