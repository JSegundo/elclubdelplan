const EventsService = require("../services/eventsServices");


class EventsController{
  static async getAllEvents(req, res, next){
    const events = await EventsService.serviceGetAllEvents(req, next);
    return events ? res.status(200).json(events) : res.sendStatus(404);
  };

  static async getMyEvents(req, res, next){
    const events = await EventsService.serviceGetAllMyEvents(req, next);
    return events ? res.status(200).json(events) : res.sendStatus(404);
  };

  static async getMyPastEvents(req, res, next){
    const events = await EventsService.serviceGetAllMyPastEvents(req, next);
    return events ? res.status(200).json(events) : res.sendStatus(404);
  };

 static async getEvent(req, res, next){
    const event = await EventsService.serviceGetEvent(req, next);
    return event ? res.status(200).json(event) : res.sendStatus(404);
  };

 static async eventByCategory(req, res, next){
    const event = await EventsService.serviceEventByCategory(req, next);
    return event ? res.status(200).json(event) : res.sendStatus(404);
  };
  static async  updateEvent(req, res, next){
    const event = await EventsService.serviceUpdateEvent(req, next);
    return res.status(201).json(event);
  };

  static async addEvent(req, res, next){
    const event = await EventsService.serviceAddEvent(req, next);
    return res.status(201).send(event);
  };
  
  static async deleteEvent(req, res, next){
    const result = await EventsService.serviceDeleteEvent(req, next);
    result
      ? res.sendStatus(204)
      : res.status(404).send("The event you want to delete doesn't exist.");
  };
}
module.exports= EventsController;
