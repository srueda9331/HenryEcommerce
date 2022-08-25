const express = require("express");

const authRouter = require("./auth.routes");
const loginRouter = require("./login.routes");
const activateAccount = require("./activateAccount.routes");
const authGoogle = require("./authGoogle.routes");
const passwordRecovery = require("./passwordRecovery.routes");
const changePassword = require("./changePassword.routes");

const usersRouter = require("./users.routes");

const productRouter = require("./product.routes");
const productsRouter = require("./products.routes");
const couponsRouter = require("./coupon.routes");

const newsletterRouter = require("./newsletter.routes");

const payRouter = require("./pay.routes");

const reviewsRouter = require("./review.routes");

const ordersRouter = require("./order.routes");

const router = express.Router();

router.use("/users", usersRouter); //Ok
router.use("/register", authRouter); //Ok
router.use("/login", loginRouter); //Ok
router.use("/google", authGoogle); // Ok
router.use("/activateAccount", activateAccount); //Ok
router.use("/passwordRecovery", passwordRecovery); //Ok
router.use("/changePassword", changePassword); //Ok

router.use("/product", productRouter); //Ok
router.use("/products", productsRouter); //Ok
router.use("/coupons", couponsRouter); //Ok

router.use("/newsletter", newsletterRouter); //Ok

router.use("/pay", payRouter); // Check with deploy

router.use("/reviews", reviewsRouter); //Ok

router.use("/orders", ordersRouter); //OK

module.exports = router;
