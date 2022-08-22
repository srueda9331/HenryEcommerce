const { Customers } = require("../db");
const bcrypt = require("bcrypt");

const addAdmin = async () => {
  if (
    !(await Customers.findOne({
      where: { email: "admintest@gmail.com" },
      attributes: { exclude: ["password"] },
    }))
  ) {
    const salt = await bcrypt.genSalt(10);
    const createUser = await Customers.create({
      full_name: "admin",
      billing_address: "Brooklyn , New York",
      email: "admintest@gmail.com",
      country: "USA",
      phone: "4851379541",
      admin: true,
      password: await bcrypt.hash("password123", salt),
    });
    return createUser;
  } else {
    console.log("admin loaded");
  }
};

module.exports = addAdmin;
