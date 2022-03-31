const Events = require("../models/Events");

class EventsServices {
  static async serviceGetAllEvents(req, next) {
    try {
      const events = await Events.find({ private: false }).populate('category');
      return events;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetAllMyEvents(req, next) {
    try {
      const events = await Events.find({ eventOwner: req.user._id, private: true }).populate('category'); // PREGUNTAR
      return events;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetEvents(req, next) {
    try {
      const event = await Events.findById(req.params.id).populate('category');
      return event;
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async serviceEventByCategory(req, next) {
    try {
      const events = await Events.find({ category : req.params.id, private: false }).populate('category'); //CHEQUEAR
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
    try {
      const { category } = req.body
      const newEvent = new Events(req.body);
      newEvent.eventOwner = req.user.id;
      newEvent.category = category; //CHEQUEAR
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
