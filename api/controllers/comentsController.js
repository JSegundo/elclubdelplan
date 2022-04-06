const ComentsService = require("../services/comentsServices");


class ComentsController{

 static async getComents(req, res, next){
    const coments = await ComentsService.serviceGetComents(req, next);
    console.log("COMENTARIO->", coments);
    return coments ? res.status(200).json(coments) : res.sendStatus(404);
  };


  static async addComent(req, res, next){
    const coment = await ComentsService.serviceAddComent(req, next);
    return res.status(201).send(coment);
  };
  
}
module.exports= ComentsController;
