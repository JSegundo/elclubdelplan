const Events = require("../models/Events")
const User = require("../models/User")

class EventsServices {
  static async serviceGetOwnerPastEvents(req, next) {
    try {
      const date = new Date()
      const events = await Events.find({
        eventOwner: req.params.ownerid,
        isPrivate: true,
        endDate: { $lt: date },
      }).populate("coments")
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
      }).populate("coments")
      return events
    } catch (err) {
      next(err)
    }
  }

  static async serviceGetAllMyEvents(req, next) {
    console.log(req.user.id)
    try {
      const date = new Date()

      const events = await Events.find({
        eventOwner: req.user.id,
        isPrivate: true,
        startDate: { $gt: date },
      }).populate("coments")
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
      }).populate("coments")
      return events
    } catch (err) {
      next(err)
    }
  }

  static async serviceGetAllMyAttendEvents(req, next) {
    //METODO PARA MOSTRAR EN LA DEMO - NO FILTRA CORRECTAMENTE
    try {
      const date = new Date()
      const events = await Events.find({
        eventOwner: req.user.id,
        isPrivate: true,
        startDate: { $gt: date },
      }).populate("coments")
      return events
    } catch (err) {
      next(err)
    }
  }

  static async serviceGetEvent(req, next) {
    try {
      const event = await Events.findById(req.params.id).populate("coments")
      return event
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  static async serviceEventByCategory(req, next) {
    try {
      const events = await Events.find({
        category: req.params.name,
        isPrivate: false,
      })
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
    console.log("req.body de serviceAddEvent: ---->", req.body)
    console.log(req.user)
    try {
      const newEvent = new Events(req.body)
      newEvent.eventOwner = req.user.id
      // User.updateOne({ _id: req.user.id }, { $push: { ownPlans: [newEvent] } })
      console.log("nuevo evento: ", newEvent)
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
