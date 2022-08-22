var express = require("express");
var router = express.Router();
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Customers } = require("../db");
<<<<<<< HEAD
const auth = require("../middlewares/auth");
=======
>>>>>>> develop_front

router.get("/", auth, async function (req, res, next) {
  const users = await Customers.findAll();
  res.status(200).send(users);
});

<<<<<<< HEAD
=======
function auth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ msg: "unauthorized" });
  }

  let token = req.headers["authorization"].split(" ")[1];
  let decoded = jwt.verify(token, process.env.SECRET);
  req.user = decoded;
  next();
}

>>>>>>> develop_front
router.get(
  "/profile",
  async (req, res, next) => {
    try {
      let token = req.headers["authorization"].split(" ")[1];
      let decoded = jwt.verify(token, process.env.SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ msg: "Couldnt Authenticate" });
    }
  },
  async (req, res) => {
    let user = await Customers.findOne({
      where: { id: req.user.id },
      attributes: { exclude: ["password"] },
    });
    if (user === null) {
      res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(user);
  }
);

router.post("/", async (req, res) => {
  const salt = await bcrypt.genSalt(10);

  try {
    let { full_name, billing_address, email, country, phone, password } =
      req.body;

    const createUser = await Customers.create({
      full_name,
      billing_address,
      email,
      country,
      phone,
      admin: false,
      password: await bcrypt.hash(password, salt),
    });

    return res.status(200).send(createUser);
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res, next) => {
  let { email, password } = req.body;

  const user = await Customers.findOne({ where: { email: email } });
  if (user) {
    const password_valid = await bcrypt.compare(password, user.password);
    if (password_valid) {
      token = jwt.sign(
<<<<<<< HEAD
        {
          id: user.id,
          email: user.email,
          full_name: user.full_name,
          admin: user.admin,
        },
=======
        { id: user.id, email: user.email, full_name: user.full_name },
>>>>>>> develop_front
        process.env.SECRET
      );
      res.status(200).json({ token: token });
    } else {
      res.status(400).json({ error: "Password Incorrect" });
    }
  } else {
    res.status(404).json({ error: "User does not exist" });
  }
});

module.exports = router;
