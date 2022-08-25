const { Product } = require("../models");
const { Op } = require("sequelize");
const { isUUIDV4 } = require("../utils/utils");

async function create(data) {
  const product = await Product.create(data);
  return product;
}

async function getById(id) {
  if (!isUUIDV4(id)) return;

  const product = await Product.findByPk(id, {
    paranoid: false,
  });

  return product;
}

async function getAll() {
  const products = await Product.findAll(
    { paranoid: false },
    { order: [["name", "ASC"]] }
  );
  return products;
}

async function getByQuery(queries) {
  if (!queries) {
    return await getAll();
  }

  const products = await Product.findAll({
    where: queries,
    paranoid: false,
    order: [["name", "ASC"]],
  });

  return products;
}

async function getByName(name) {
  const product = await Product.findOne({
    where: { name: { [Op.iLike]: `${name}` } },
  });
  return product;
}

async function destroy(id) {
  const deletedProduct = await Product.destroy({
    where: {
      id: id,
    },
  });

  return deletedProduct;
}

async function restore(id) {
  const restoredProduct = await Product.restore({
    where: {
      id: id,
    },
  });

  return restoredProduct;
}

async function update(data) {
  // actualizo la data
  await Product.update(data, { where: { id: data.id } });
  // lo busco
  const updateado = await Product.findByPk(data.id);

  // // lo relaciono
  // await updateado.setIngredient(data.ingredient ? data.ingredient : []); // set, que pise todo y lo reemplace
  // const withRelation = await Burger.findByPk(updateado.id, {
  //   paranoid: false,
  //   include: [
  //     {
  //       association: "ingredient",
  //       attributes: ["name"],
  //       through: {
  //         attributes: [],
  //       },
  //     },
  //   ],
  // });

  return updateado;
}

module.exports = {
  create,
  getById,
  getAll,
  getByQuery,
  getByName,
  destroy,
  restore,
  update,
};
