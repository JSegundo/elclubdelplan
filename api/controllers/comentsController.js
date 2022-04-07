const ComentsService = require("../services/comentsServices");


class ComentsController{

 static async getComents(req, res, next){
    const coments = await ComentsService.serviceGetComents(req, next);
    return coments ? res.status(200).json(coments) : res.sendStatus(404);
  };


  static async addComent(req, res, next){
    const coment = await ComentsService.serviceAddComent(req, next);
    return coment ? res.status(201).json(coment) : res.sendStatus(404);
  };
  
}
module.exports= ComentsController;
