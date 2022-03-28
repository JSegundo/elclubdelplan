const UsersService = require("../services/usersServices");

class UsersController{

  static async registerUsers(req, res){
    await UsersService.serviceResgisterUser(req);
    return res.sendStatus(201);
  };

  static async loginUsers(req, res){
    const user = await UsersService.serviceLogin(req);
    return res.send(user);
  };
  
  static async logOutUsers(req, res){
    req.logOut();
    return res.status(200).send({});
  };
  
  static async getMe (req, res){
    const user = await UsersService.serviceGetMe(req);
    return user ? res.send(user) : res.sendStatus(401);
  };
  
  static async editUsers(req, res, next){
    const updatedUser = await UsersService.serviceEditUser(req, next);
    return res.status(200).send(updatedUser);
  };
  
  static async getOneUsers(req, res, next){
    const user = await UsersService.serviceGetOneUser(req, next);
    return res.send(user);
  };
}
module.exports= UsersController;