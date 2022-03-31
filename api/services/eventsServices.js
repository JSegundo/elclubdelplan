const Events = require("../models/Events");

class EventsServices {
  static async serviceGetAllEvents(req, next) {
 
    try {
      const events = await Events.find({ private: false });
      console.log("EVENTS", events)
      return events;
    } catch (err) { 
      next(err);
    }
  }

  static async serviceGetAllMyEvents(req, next) {
    try {
      const events = await Events.find({ eventOwner: req.user._id, private: true }); // PREGUNTAR
      return events;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetEvents(req, next) {
    try {
      const event = await Events.findById(req.params.id);
      return event;
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async serviceEventByCategory(req, next) {
    try {
      const events = await Events.find({ category : req.params.name, private: false });
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
      const newEvent = new Events(req.body);
      newEvent.eventOwner = req.user.id;
      await newEvent.save();
      return newEvent;
    } catch (err) {
      console.log(err);
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
