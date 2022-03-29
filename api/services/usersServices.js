const User = require("../models/User"); // preguntar como se exportan los modelos en mongo
const jwt = require("jsonwebtoken");

require("dotenv").config();

const { verifyHash } = require("../config/passwordHash");

class UsersService {
  static async serviceResgisterUser(req) {
    console.log(req.body);
    try {
      const newUser = await User.create(req.body);
      console.log(newUser);
    } catch (err) {
      console.error("err->", err);
    }
  }

  static async serviceLogin(req) {
    const { email, password } = req.body;
    try {
      if (email && password) {
        let user = await User.findOne({ email });
        if (!user) {
          return { msg: "No such user found", user };
        }

        let verifyUser = await verifyHash(password, user.password, user.salt);

        if (!verifyUser) {
          console.log("LAS CONTRASEÑAS NO COINCIDEN");
          return { msg: "Password is incorrect" };
        } else {
          let payload = { id: user._id };
          let token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
          return { msg: "ok", token: token, user: user };
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  static async serviceLogout(req) {
    try {
      //METODO LOGOUT
    } catch (err) {
      console.error(err);
    }
  }

  static async serviceGetMe(req) {
    try {
      //METODO USUARIO LOGUEADO
      const user = await User.find({ _id: req.params.id });
      return user;
    } catch (err) {
      console.error(err);
    }
  }

  static async serviceEditUser(req, next) {
    try {
      //METODO EDITAR USUARIO
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetOneUser(req, next) {
    try {
      //METODO FINDONE
    } catch (err) {
      next(err);
    }
  }
}
module.exports = UsersService;
