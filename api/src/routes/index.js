const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {model} = require('../db')
const getInfo = require('../routes/getPhone');


const router = Router();

router.use('/phones', getInfo)

module.exports = router