const { Events } = require("../models"); // preguntar como se exportan los modelos en mongo

class EventsServices {
  static async serviceGetAllEvents(req, next) {
    try {
      //METODO GETALL
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetEvents(req, next) {
    try {
      //METODO FINDONE
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async serviceEventByCategory(req, next) {
    try {
      //METODO GET POR CATEGORIA
    } catch (err) {
      next(err);
    }
  }

  static async serviceUpdateEvent(req, next) {
    try {
      //METODO UPDATE
    } catch (err) {
      next(err);
    }
  }

  static async serviceAddEvent(req, next) {
    try {
      //METODO POST
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async serviceDeleteEvent(req, next) {
    try {
      //METODO DELETE
    } catch (err) {
      next(err);
    }
  }
}

module.exports = EventsServices;
