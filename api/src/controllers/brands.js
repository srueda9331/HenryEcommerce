const { Brands } = require("../db");
const { listOfBrands } = require("../controllers/data");

const addBrands = async () => {
  if (!(await Brands.findAll()).length) {
    const data = listOfBrands;
    const lsb = await Brands.bulkCreate(data, {
      returning: true,
    });
    return lsb;
  } else {
    console.log("Brands loaded");
  }
};

module.exports = addBrands;
