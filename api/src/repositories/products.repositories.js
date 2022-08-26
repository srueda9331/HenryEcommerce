const productrepositories = require("../repositories/product.repositories");

async function getById(id) {
  const product = await productrepositories.getById(id);
  if (product) return product;

  return undefined;
}

async function getByQuery(queries) {
  const product = await productrepositories.getByQuery(queries);

  let all = [...product];

  return all;
}

module.exports = {
  getById,
  getByQuery,
};
