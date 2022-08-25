const productsRepository = require("../repositories/products.repositories");
const utils = require("../utils/utils");

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const find = await productsRepository.getById(id);

    if (!find) {
      return res.status(404).json({ error: "Producto no encontrado!" });
    }

    return res.status(200).json(find);
  } catch (error) {
    next(error);
  }
}

async function getByQuery(req, res, next) {
  try {
    const category = req.query.category
      ? req.query.category.toLowerCase()
      : req.query.category;
    const name = req.query.name ? req.query.name.toLowerCase() : req.query.name;
    const order = req.query.order
      ? req.query.order.toLowerCase()
      : req.query.order;
    const isDeleted = req.query.isDeleted ? "true" : "false";
    const filters = utils.setFilters({ name, isDeleted });
    let products = [];

    if (!category) {
      const all = await productsRepository.getByQuery(filters);
      products = [...all];
    }

    if (order) {
      products = utils.sort(order, products, "price");
    }

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getByQuery,
  getById,
};
