const jwt = require("jsonwebtoken")
require("dotenv").config()

const checkJwt = (req, res, next) => {
  if (!req.headers.authorization) return res.status(400).send("Missing token")
  const token = req.headers.authorization.split(" ")[1]
  const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  if (data) {
    req.user = data
    return next()
  }
  return res.status(401).send("Acceso denegado! JWT")
}

module.exports = checkJwt
