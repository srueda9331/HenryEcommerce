const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ msg: "unauthorized" });
  }

  let token = req.headers["authorization"].split(" ")[1];
  let decoded = jwt.verify(token, process.env.SECRET);
  req.user = decoded;
  if (req.user.admin == true) {
    next();
  } else {
    return res.status(403).send({ msg: "unauthorized" });
  }
}

module.exports = auth;
