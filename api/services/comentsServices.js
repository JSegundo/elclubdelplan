const Events = require("../models/Events");
const Coments = require("../models/Coments")

class ComentsServices {
 static async serviceGetComents(req, next) {
    try {
        console.log("ID->", req.params.id);
      const event = await Events.findById(req.params.id).populate('coments')
      console.log("EVENTO->", event);
      return event.category
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  static async serviceAddComent(req, next) {
    try {
      const newComent = new Coments(req.body);
      const event = await Events.findById(req.params.id);
      await newComent.save();
      event.coments.push(newComent);
      return newComent
    } catch (err) {
      console.error(err)
      next(err)
    }
  }
}

module.exports = ComentsServices