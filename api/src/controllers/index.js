const { Product } = require("../db");

const getInfo = () => {
  const info = JSON;

  const jsonInfo = info.map((cellphone) => {
    return {
      id: cellphone.id,
      image: cellphone.image,
      rating: cellphone.rating,
      stock: cellphone.stock,
      sku: cellphone.sku,
      price: cellphone.price,
      weight: cellphone.weight,
      height: cellphone.height,
      description: cellphone.description,
      quantity: cellphone.quantity,
      stock: cellphone.stock,
      review: cellphone.review,
    };
  });
  return jsonInfo;
};

const addInfoDb = async () => {
  if (!(await Product.findAll()).length) {
    const products = jsonInfo;

    const addDB = await Product.bulkCreate(products, { returning: true });
    return addDB;
  } else {
    console.log("Products already added");
  }
};

const getDataDb = async () => {
  return await Recipe.findAll({
    include: {
      model: Product,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

module.exports = {
  getInfo,
  addInfoDb,
  getDataDb,
};
