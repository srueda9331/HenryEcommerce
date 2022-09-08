const productRepository = require("../repositories/product.repositories");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newProduct = await productRepository.create(data);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;
    const deletedProduct = await productRepository.destroy(id);

    if (deletedProduct)
      return res
        .status(200)
        .json({ message: "Producto desactivado correctamente!" });

    return res.status(404).json({
      error: `No hay ningún producto para ser desactivado con id ${id}!`,
    });
  } catch (error) {
    next(error);
  }
}

async function restore(req, res, next) {
  try {
    const { id } = req.params;
    const restoredProduct = await productRepository.restore(id);

    if (restoredProduct)
      return res
        .status(200)
        .json({ message: "Producto activado correctamente!" });

    return res.status(404).json({
      error: `No hay ningún producto para ser activado con id ${id}!`,
    });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const data = req.body;
    const updatedProduct = await productRepository.update(data);
    return res.status(200).json({ message: "Producto actualizado!" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  destroy,
  restore,
  update,
};
