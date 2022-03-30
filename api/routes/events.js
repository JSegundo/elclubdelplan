const express = require("express");
const router = express.Router();
const EventsControllers = require("../controllers/eventsController");

//RUTA PARA BUSCAR EVENTOS
router.get("/", EventsControllers.getAllEvents);
//RUTA PARA BUSCAR UN EVENTO
router.get("/:id", EventsControllers.getEvent);
//RUTA PARA BUSCAR EVENTOS POR CATEGORIAS
router.get("/categories/:name", EventsControllers.eventByCategory);
//RUTA PARA EDITAR UN EVENTO
router.put("/:id", EventsControllers.updateEvent);
//RUTA PARA AGREGAR UN EVENTO
router.post("/add", EventsControllers.addEvent);
//RUTA PARA ELIMINAR UN EVENTO
router.delete("/remove", EventsControllers.deleteEvent);

module.exports = router;