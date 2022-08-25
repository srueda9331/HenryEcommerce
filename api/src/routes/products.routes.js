const express = require("express");
const { getByQuery, getById } = require("../controllers/products.controllers");

const router = express.Router();

router.get("/", getByQuery);
router.get("/:id", getById);

module.exports = router;
