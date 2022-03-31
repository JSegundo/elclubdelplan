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
  date: {
    startDate: { type: String }, //--> desp habría q cambiarlo a Date en vez de String
    endDate: { type: String },
    paymentDay: { type: String }, //--> no es required porque si es público esta opción no existe.
  },
  time: { type: String },
  location: {
    type: String,
  },
  isPrivate: {
    type: Boolean,
    default: true,
  },
  totalPrice: Number,
  category: {
    type: String,
  },
  eventOwner: [{ type: Schema.ObjectId, ref: "User" }], //--> referencia al user, usar .populate() en el pedido al back desde en front
});

const EventModel = model("Event", EventSchema);

module.exports = EventModel;
