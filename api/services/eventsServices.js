const Events = require("../models/Events")
const User = require("../models/User")

class EventsServices {
  static async serviceGetOwnerPastEvents(req, next) {
    try {
      const date = new Date()
      const owner = await User.findById(req.params.ownerid)
      const events = await Events.find({
        endDate: { $lt: date },
      })
        .where("eventOwner")
        .equals(owner)
        .populate("coments")
        .populate("eventOwner")
      return events
    } catch (err) {
      next(err)
    }
  }

  static async serviceGetAllEvents(req, next) {
    try {
      const date = new Date()
      const events = await Events.find({
        isPrivate: false,
        startDate: { $gt: date },
      })
        .populate("coments")
        .populate("eventOwner")
      return events
    } catch (err) {
      next(err)
    }
  }

  static async serviceGetAllMyEvents(req, next) {
    try {
      const date = new Date()

      const events = await Events.find({
        eventOwner: req.user.id,
        // isPrivate: true,
        startDate: { $gt: date },
      })
        .populate("coments")
        .populate("eventOwner")
      return events
    } catch (err) {
      next(err)
    }
  }

  static async serviceGetAllMyPastEvents(req, next) {
    try {
      const date = new Date()
      const events = await Events.find({
        eventOwner: req.user.id,
        isPrivate: true,
        endDate: { $lt: date },
      })
        .populate("coments")
        .populate("eventOwner")
      return events
    } catch (err) {
      next(err)
    }
  }

  //MÉTODO PARA MOSTRAR LOS EVENTOS A LOS QUE FUE INVITADO EL USER
  static async serviceGetMyEventsInvitations(req, next) {
    try {
      const date = new Date()
      const events = await Events.where("startDate")
        .gt(date)
        .where("guests")
        .equals(req.user.id)
        .populate("eventOwner")
      return events
    } catch (err) {
      next(err)
    }
  }

  //MÉTODO PARA MOSTRAR LOS EVENTOS A LOS QUE ASISTIRÁ EL USER
  static async serviceGetMyEventsWillAttend(req, next) {
    try {
      const date = new Date()
      const events = await Events.where("startDate")
        .gt(date)
        .where("willAttend")
        .equals(req.user.id)
        .populate("eventOwner")
      return events
    } catch (err) {
      next(err)
    }
  }

  //MÉTODO PARA HACER EL CONFIRM AL EVENTO
  static async serviceUpdateEventWillAttend(req, next) {
    try {
      const event = await Events.findByIdAndUpdate(
        req.params.id,
        { $push: { willAttend: req.body }, $pull: { guests: req.body._id } },
        { new: true }
      )
      return event
    } catch (err) {
      next(err)
    }
  }

  static async serviceGetEvent(req, next) {
    try {
      const event = await Events.findById(req.params.id)
        .populate("coments")
        .populate("eventOwner")
      return event
    } catch (err) {
      console.error(err)
      next(err)
    }
  }

  static async serviceEventByCategory(req, next) {
    try {
      const events = await Events.find({
        category: req.params.name,
        isPrivate: false,
      })
        .populate("coments")
        .populate("eventOwner")
      return events
    } catch (err) {
      next(err)
    }
  }

  static async serviceUpdateEvent(req, next) {
    try {
      const event = await Events.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return event
    } catch (err) {
      next(err)
    }
  }

  static async serviceAddEvent(req, next) {
    try {
      const newEvent = new Events(req.body)
      newEvent.eventOwner = req.user.id
      await newEvent.save()
      return newEvent
    } catch (err) {
      console.error(err)
      next(err)
    }
  }

  static async serviceDeleteEvent(req, next) {
    try {
      const res = await Events.findByIdAndDelete(req.params.id)
      return res
    } catch (err) {
      next(err)
    }
  }
}

module.exports = EventsServices
