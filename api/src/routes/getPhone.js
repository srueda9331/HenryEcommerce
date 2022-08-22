const { Router } = require("express");
const { getInfo } = require("../controllers/index");
const { Product } = require("../db");
const auth = require("../middlewares/auth");

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

router.post("/", auth, async (req, res) => {
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


router.put("/put/:name", auth, async (req, res) => {

  try {
    let nombre = req.params.name;
    let { description } = req.body;
    await Product.update(
      { description },
      {
        where: {
          name: nombre,
        },
      }
    );
    res.status(201).send(nombre);
  } catch (error) {
    console.log(error);
  }
});

<<<<<<< HEAD

router.delete("/:id", auth, async (req, res) => {
  try {
    let deletePhone = await Product.findOneAndDelete({ id: req.params.id });
=======
router.delete("/:id", async (req, res) => {
  try {
    const deletePhone = await Product.findOneAndDelete({ id: req.params.id });
>>>>>>> develop_front
    if (!deletePhone) {
      res.status(404).send({ error: "Phone not found" });
    }
    res.send(deletePhone);
  } catch (e) {
    res.status(400).send(e);
  }
});

// We find and delete the item using the id provided in the request.
// If the item exists, it will be returned and we can check if any item is returned.
// If yes, we send back the item but if no item was found, we send back an error.

module.exports = router;
