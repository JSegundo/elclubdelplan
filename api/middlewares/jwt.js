const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkJwt = (req, res, next) => {
  console.log(req.headers);

  if (!req.headers.authorization) return res.status(400).send("Missing token");

  // console.log("HEADER AUTH ---->", req.headers.authorization);

  const token = req.headers.authorization.split(" ")[1];
  console.log(token);

  const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  if (data) {
    req.user = data;
    return next();
  }

  return res.status(401).send("Acceso denegado! JWT");
};

module.exports = checkJwt;
