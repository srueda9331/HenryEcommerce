const productsRepository = require("../repositories/products.repositories");
const couponRepository = require("../repositories/coupon.repositories");

async function validateDbProduct(res, id, quantity) {
  const product = await productsRepository.getById(id);

  if (!product) {
    return {
      error: `No se encontro ningun producto con este id: ${id}`,
      status: 404,
    };
  }

  return {
    id,
    title: product.name,
    currency_id: process.env.CURRENCY_ID,
    picture_url: product.image,
    quantity,
    unit_price: product.price,
  };
}

async function validateCreatedProduct(id, quantity, name, createdAt) {
  if (createdAt == undefined)
    return {
      status: 400,
      error: "createdAt needed",
    };

  return {
    id,
    name,
    createdAt,
    quantity,
  };
}

async function validateCoupons(coupons) {
  try {
    let couponsValidated = [];
    for (let i = 0; i < coupons.length; i++) {
      const coupon = await couponRepository.getById(coupons[i]);

      if (!coupon) {
        return {
          error: `No se encontro ningun cupon con este id: ${coupons[i]}`,
          status: 404,
        };
      }

      const today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
      const yyyy = today.getFullYear();
      const todayDate = new Date(`${yyyy}-${mm}-${dd}`);
      const expDate = new Date(coupon.expirationDate);

      if (todayDate > expDate) {
        return {
          error: "El cupon esta vencido.",
          status: 400,
        };
      }

      const usedCoupon = couponsValidated.find((f) => f.code === coupon.code);

      if (usedCoupon) {
        return {
          error: "Cupon duplicado",
          status: 400,
        };
      }

      couponsValidated.push(coupon);
    }

    return couponsValidated;
  } catch (error) {
    next(error);
  }
}

async function validatePurchase(req, res, next) {
  try {
    const items = [];
    const { cart, coupons } = req.body;
    console.log(cart);

    if (!cart || cart.length < 1) {
      return res.status(400).json({ error: "El carrito esta vacio" });
    }

    for (let i = 0; i < cart.length; i++) {
      const { id, createdAt, cantidad, name, image } = cart[i];

      if (createdAt) {
        const validated = await validateDbProduct(res, id, cantidad);
        if (!validated.error) {
          items.push(validated);
        } else {
          return res.status(validated.status).json({ error: validated.error });
        }
      } else {
        const validated = await validateCreatedProduct(
          id,
          cantidad,
          name,
          image
        );
        console.log(validated);
        if (!validated.error) {
          items.push(validated);
        } else {
          return res.status(validated.status).json({ error: validated.error });
        }
      }
    }

    let couponsValidated = [];

    if (coupons && coupons.length > 0) {
      couponsValidated = await validateCoupons(coupons);
    }

    if (couponsValidated.error) {
      return res
        .status(couponsValidated.status)
        .json({ error: couponsValidated.error });
    }

    req.body.items = items;
    req.body.coupons = couponsValidated;
    next();
  } catch (error) {
    next(error);
  }
}

async function applyCupons(req, res, next) {
  try {
    const { coupons, items } = req.body;

    items.map((item) => {
      for (let i = 0; i < coupons.length; i++) {
        if (coupons[i].productsId.includes(item.id)) {
          console.log(item.id);
          item.unit_price =
            (item.unit_price / 100) * (100 - coupons[i].discountPorcentage);
          item.title = `${item.title} (${coupons[i].discountPorcentage}%OFF)`;
        }
      }
    });
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = { validatePurchase, applyCupons };
