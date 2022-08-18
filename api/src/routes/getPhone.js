
const { Router } = require("express");
const { getInfo } = require("../controllers/index");
const { Product, Brands } = require("../db");


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => {
  const { phone } = req.query;
  const allPhones = await getInfo();
  try {
    if (phone) {
      let phoneName = await allPhones.find(
        (e) => e.phone.toLowerCase() === phone.toLowerCase()
      );
      if (phoneName === undefined) {
        return res.status(404).send("No phone");
      } else {
        return res.status(200).json(phoneName);
      }
    } else {
      res.status(200).json(allPhones);
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
  const {
    name,
    sku,
    price,
    weight,
    height,
    description,
    image,
    brand,
    quantity,
    stock,
    rating,
    review,
  } = req.body;
  try {
    const createProduct = await Product.create({
      name,
      sku,
      price,
      weight,
      height,
      description,
      image,
      quantity,
      stock,
      rating,
      review,
    });

    let brandsDb = await Brands.findAll({
      where: { name: brand },
    });
    createProduct.addBrands(brandsDb);

    res.status(200).send(createProduct);
    res.send("Product created successfully!");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
