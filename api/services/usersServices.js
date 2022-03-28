const { Users } = require("../models"); // preguntar como se exportan los modelos en mongo

class UsersService{

  static async serviceResgisterUser(req){
    try {
        //METODO REGISTER
    } catch (err) {
      console.log("err->", err);
    }
  };

  static async serviceLogin(req){
    try {
        //METODO LOGIN
    } catch (err) {
      console.log(err);
    }
  };

  static async serviceLogout(req){
    try {
        //METODO LOGOUT
    } catch (err) {
      console.log(err);
    }
  };
  
  static async serviceGetMe(req){
    try {
        //METODO USUARIO LOGUEADO
    } catch (err) {
      console.log(err);
    }      
  };

  static async serviceEditUser(req, next){
    try {
        //METODO EDITAR USUARIO
    } catch (err) {
      next(err);
    }
  };
  
 static async serviceGetOneUser(req, next){
    try {
        //METODO FINDONE
    } catch (err) {
      next(err);
    }
  };
}
module.exports= UsersService;