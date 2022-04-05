const UsersService = require("../services/usersServices")

class UsersController {
  static async registerUsers(req, res) {
    const user = await UsersService.serviceResgisterUser(req)
    return user ? res.sendStatus(201) : res.sendStatus(500)
  }

  static async loginUsers(req, res) {
    const user = await UsersService.serviceLogin(req)
    return res.send(user)
  }

  static async logOutUsers(req, res) {
    // LOGICA DE LOGOUT
    return res.status(200).send({})
  }

  static async getMe(req, res) {
    const user = await UsersService.serviceGetMe(req)
    return user ? res.send(user) : res.sendStatus(401)
  }

  static async editUsers(req, res, next) {
    const updatedUser = await UsersService.serviceEditUser(req, next)
    return res.status(200).send(updatedUser)
  }

  static async getOneUsers(req, res, next) {
    const user = await UsersService.serviceGetOneUser(req, next)
    return res.send(user)
  }
}
module.exports = UsersController
