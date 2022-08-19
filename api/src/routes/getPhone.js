const { Router } = require("express");
const { getInfo } = require("../controllers/index");
const { Product } = require("../db");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => {
  let name = req.query.name;
  const allPhones = await getInfo();

  try {
    if (name) {
      let phonesName = allPhones.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      phonesName.length
        ? res.status(200).send(phonesName)
        : res.status(404).send("phone doenst exist");
    } else {
      res.status(200).send(allPhones);
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allPhones = await getInfo();
  try {
    if (id) {
      const phoneId = await allPhones.filter((e) => e.id == id);
      phoneId.length
        ? res.status(200).json(phoneId)
        : res.status(404).send("Phone not found");
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let {
      name,
      price,
      weight,
      height,
      description,
      image,
      brands,
      quantity,
      stock,
      rating,
      review,
    } = req.body;

    const createProduct = await Product.create({
      name,
      image,
      price,
      weight,
      height,
      description,
      brands,
      quantity,
      stock,
      rating,
      review,
    });

    return res.status(200).send(createProduct);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
