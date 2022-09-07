const { Newsletter, Product, User, Coupon } = require("../models");
const bcrypt = require("bcrypt");

const { addDataDB } = require("../utils/addDataDB");

async function precharge() {
  try {
    const data = addDataDB();

    if (!data) return;

    if (data.products.length) {
      for (const product of data.products) {
        const find = await Product.findByPk(product.id, { paranoid: false });
        if (!find) {
          await Product.create(product);
        }
      }
    }

    await User.bulkCreate(
      [
        {
          id: "dbaf0142-48ec-4900-8694-1d8eb4080c39",
          firstName: "Henry",
          lastName: "Ecommerce",
          email: "henryecommerceg13@gmail.com",
          password: await bcrypt.hash("1234", 10),
          role: "admin",
          isConfirmed: true,
        },
        {
          id: "5418ad15-329f-43fb-a626-201ebdf0a6a6",
          firstName: "Gabriel",
          lastName: "Juarez",
          email: "notspawn0@gmail.com",
          password: await bcrypt.hash("1234", 10),
          role: "customer",
          isConfirmed: true,
        },
      ],
      {
        ignoreDuplicates: true,
      }
    );

    await Coupon.bulkCreate(
      [
        {
          code: "XLXR567",
          title: "Apple Day",
          expirationDate: "2023-04-21",
          imgUri: "https://cdn.lovesavingsgroup.com/logos/apple.png",
          discountPorcentage: 15,
          productsId: [
            "cf85f5b3-1e67-43ac-bc7c-ad6eaf3d21e8",
            "57f9ba7a-beaf-4232-a0e6-26b5c386e7fc",
            "1a2a1a8e-a9c1-4822-b0c1-f75e687d9500",
            "8f2369a4-6cfc-49c1-bba5-09dfc52100af",
            "a390c8e4-4e9b-4ced-baba-6e8487411ca3",
            "1b4fe7dc-c47b-49af-a39d-059e96a0dc93",
            "e41c6806-a19c-49a3-80d6-34f2f4878fb6",
          ],
        },
        {
          code: "RTTAS87",
          title: "Samsung Day",
          expirationDate: "2023-08-04",
          imgUri:
            "https://coupons.cnet.com/image/eyJrZXkiOiJjbnQvdXBsb2Fkcy9sb2dvcy9zYW1zdW5nLiIsIm91dHB1dEZvcm1hdCI6IndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIxNX19fQ==?1626447698",
          discountPorcentage: 20,
          productsId: [
            "560dea18-3455-49fe-b43e-e584ecfde517",
            "0d737b80-9547-4a15-ba6f-8128e55b6dfa",
            "8c18fb1e-fc98-4194-9abb-010fcbe7e853",
            "0a9ec315-24ef-43de-a37d-c66fcf4ccdba",
            "221984ae-7e71-470c-984a-3fa90dc883fe",
          ],
        },
      ],
      {
        ignoreDuplicates: true,
      }
    );

    console.log("models precharged successfully!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  precharge,
};
