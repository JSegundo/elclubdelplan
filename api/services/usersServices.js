const { Users } = require("../models"); // preguntar como se exportan los modelos en mongo

class UsersService {

  static async serviceResgisterUser(req) {
    try {
      //FALTAN LAS VALIDACIONES
      const newUser = new User(req.body);
      const user = await newUser.save();
      return user
    } catch (err) {
      console.log(err);
    }
  };

  static async serviceLogin(req) {
    try {
      // FALTAN LAS VALIDACIONES
      const user = await Users.findOne({ email: req.body.email });
      //AVERIGUAR COMO FILTRAR DATOS PARA NO DEVOLVER PASS Y SALT

      // LOGICA DE JWT
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  /*static async serviceLogout(req){
    try {
        //METODO LOGOUT
    } catch (err) {
      console.log(err);
    }
  };*/

  static async serviceGetMe(req) {
    try {
      const user = await Users.findById(req.user.id);
      // VER NOMBRE DE LOS CAMPOS EN LOS MODELOS
      return {
        name: user.name,
        email: user.email,
        id: user._id,
      }
    } catch (err) {
      console.log(err);
    }
  };

  static async serviceEditUser(req, next) {
    try {
      const { id } = req.params;
      const oldUser = await Users.findByIdAndUpdate(id, req.body);
      // REVISAR QUE DEBERIA DEVOLVER ESTE METODO
      return 1;
    } catch (err) {
      next(err);
    }
  };

  static async serviceGetOneUser(req, next) {
    try {
      const { id } = req.params;
      const user = await Users.findById(id);
      return user;
    } catch (err) {
      next(err);
    }
  };
}
module.exports = UsersService;