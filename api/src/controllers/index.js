const { Product } = require("../db");

const getInfo = () => {
  const info = JSON;

  const jsonInfo = info.map((cellphone) => {
    return {
      id: cellphone.id,
      image: cellphone.image,
      rating: cellphone.rating,
      stock: cellphone.stock,
      //rest of properties
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
