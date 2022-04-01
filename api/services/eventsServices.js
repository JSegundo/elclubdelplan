const Events = require("../models/Events");

class EventsServices {
  static async serviceGetAllEvents(req, next) {
 
    try {
      const events = await Events.find({ isPrivate: false }).populate(
        "category"
      );
      return events;
    } catch (err) { 
      next(err);
    }
  }

  static async serviceGetAllMyEvents(req, next) {
    console.log(req.params);
    try {
      const events = await Events.find({
        eventOwner: req.params.userid,
        isPrivate: true,
      });
      // .populate("category"); // PREGUNTAR
      return events;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetAllMyPastEvents(req, next) {
    try {
      const date = Date();
      const events = await Events.find({
        eventOwner: req.user._id,
        isPrivate: true,
        date: { $lt: date }, //CHEQUEAR CON MODELO
      }).populate("category"); // PREGUNTAR
      return events;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetEvents(req, next) {
    try {
      const event = await Events.findById(req.params.id).populate("category");
      return event;
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async serviceEventByCategory(req, next) {
    try {
      const events = await Events.find({
        category: req.params.id,
        isPrivate: false,
      }).populate("category"); //CHEQUEAR
      return events;
    } catch (err) {
      next(err);
    }
  }

  static async serviceUpdateEvent(req, next) {
    try {
      const oldEvent = await Events.findByIdAndUpdate(req.params.id, req.body);
      return oldEvent;
    } catch (err) {
      next(err);
    }
  }

  static async serviceAddEvent(req, next) {
    //CHEQUEAR
    try {
      console.log("BODY->", req.body);
      const { category, ...rest } = req.body;
      console.log("REST->", rest);
      const newEvent = new Events(rest);
      newEvent.eventOwner = req.user.id;
      //esta linea no deberia hacer falta
      newEvent.category = category;
      await newEvent.save();
      return newEvent;
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async serviceDeleteEvent(req, next) {
    try {
      const res = await Events.findByIdAndDelete(req.params.id);
      return res;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = EventsServices;
