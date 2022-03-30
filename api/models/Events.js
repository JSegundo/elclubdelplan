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
    startDate: {type: String, required: true}, //--> desp habría q cambiarlo a Date en vez de String
    endDate: {type: String, required: true},
    paymentDay: {type: String} //--> no es required porque si es público esta opción no existe.     
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
  eventOwner: [{ type: Schema.ObjectId, ref: "User" }], //--> referencia al user, usar .populate() en el pedido al back desde en front
});

const EventModel = model("Event", EventSchema);

module.exports = EventModel;
