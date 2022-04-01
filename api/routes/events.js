const express = require("express");
const router = express.Router();
const EventsControllers = require("../controllers/eventsController");
const checkJWT = require("../middlewares/jwt");
//FALTA AGREGAR EL MIDDLEWARE

//RUTA PARA BUSCAR EVENTOS
router.get("/", EventsControllers.getAllEvents);
//RUTA PARA BUSCAR EVENTOS PRIVADOS DE UN USUARIO
router.get("/me/:userid", EventsControllers.getMyEvents);
//RUTA PARA BUSCAR EVENTOS PASADOS DE UN USUARIO
router.get("/done/:userid", EventsControllers.getMyPastEvents);
//RUTA PARA BUSCAR UN EVENTO
router.get("/:id", EventsControllers.getEvent);
//RUTA PARA BUSCAR EVENTOS POR CATEGORIAS
router.get("/category/:name", EventsControllers.eventByCategory);
//RUTA PARA EDITAR UN EVENTO
router.put("/:id", EventsControllers.updateEvent);
//RUTA PARA AGREGAR UN EVENTO
router.post("/add", EventsControllers.addEvent);
//RUTA PARA ELIMINAR UN EVENTO
router.delete("/:id", EventsControllers.deleteEvent);

module.exports = router;
