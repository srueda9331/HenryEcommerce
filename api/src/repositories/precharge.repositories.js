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
          password: await bcrypt.hash("password123", 10),
          role: "admin",
          isConfirmed: true,
        },
        {
          id: "9d70e6a6-bc63-46aa-9a4c-22c540a565fd",
          firstName: "Facundo",
          lastName: "Juarez",
          email: "employee@gmail.com",
          password: await bcrypt.hash("1234", 10),
          role: "employee",
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
            "f3a181c0-1f95-4788-bbb4-fd38d4c6634a",
            "7e33e6b9-23bb-464b-8d61-2c7dd869b569",
            "43dd3750-1ee6-489f-baeb-b7431eba6ae7",
            "08f6fa50-90b8-4f23-acc3-4572b833f71c",
            "563e6890-1bee-43cd-8ec7-f4ef37b7c2fd",
            "1b1261d0-22f9-4164-b6c2-3aef28f94ed7",
            "f456331d-5058-4a78-bb3b-97daa0c9daa4",
            "9bb64175-7658-4874-896c-8feec9557ead",
            "645e2ac4-c4b3-4e2b-9479-304e6b5d0c95",
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
