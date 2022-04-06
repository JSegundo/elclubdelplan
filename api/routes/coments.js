const express = require("express")
const router = express.Router()
const ComentsControllers = require("../controllers/comentsController")
const checkJWT = require("../middlewares/jwt")

//RUTA PARA BUSCAR COMENTARIOS DE UN EVENTO
router.get("/:id", ComentsControllers.getComents)
//RUTA PARA AGREGAR UN COMENTARIO
router.post("/:id", checkJWT, ComentsControllers.addComent)

module.exports = router