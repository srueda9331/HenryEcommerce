const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
<<<<<<< Updated upstream


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


=======
const getBrands = require("../routes/getBrands");
const getInfo = require("../routes/getPhone");

const router = Router();

router.use("/phones", getInfo);
router.use("/brands", getBrands);

>>>>>>> Stashed changes
module.exports = router;
