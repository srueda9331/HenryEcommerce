const { body, param } = require("express-validator");
const productRepository = require("../repositories/product.repositories");
const userRepositories = require("../repositories/user.repositories");
const { productRoles, authRoute } = require("../utils/routesRoles");

const nameValid = body("name")
  .notEmpty()
  .withMessage("name is required")
  .custom(async (name, { req }) => {
    const result = await productRepository.getByName(name);

    if (req.body.id && result && req.body.id !== result.id) {
      throw new Error("product already exists");
    }

    if (!req.body.id && result) {
      throw new Error("product already exists");
    }
  })
  .withMessage("product already exists");

const priceValid = body("price")
  .notEmpty()
  .withMessage("price is required")
  .isFloat({ min: 0 })
  .withMessage("invalid price");

// const imgUriValid = body("imgUri")
//   .notEmpty()
//   .withMessage("img required")
//   .isURL()
//   .withMessage("img invalid");

const roleValid = body("user")
  .custom(async (user) => {
    const myUser = await userRepositories.getById(user.id);
    const hasRole = authRoute(productRoles, myUser.role);

    if (!hasRole) {
      throw new Error("This user is unauthorized");
    }
  })
  .withMessage("This user is unauthorized");

const postValidator = [
  nameValid,
  priceValid,
  // imgUriValid,
];

const roleValidator = [roleValid];

module.exports = {
  postValidator,
  roleValidator,
};
