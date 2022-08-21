const { Router } = require("express");
const { listOfBrands } = require("../controllers/data");
const { Brands } = require("../db");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    listOfBrands.forEach((e) => {
      Brands.findOrCreate({
        where: { name: e.name, description: e.description, logo: e.logo },
      });
    });
    const listbrands = await Brands.findAll();
    res.send(listbrands);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
