const {
  createProduct,
  getProductById,
  getAllProducts,
  getProductByName,
} = require("../controllers/productsControllers");
const Category = require("../models/Category");

const createProductsHandler = async (req, res) => {
  const { name, price, category, description, stock } = req.body;

  try {
    const newProduct = await createProduct(
      name,
      price,
      category,
      description,
      stock
    );

    for (const categoryName of category) {
      let categories = await Category.findOne({ name: categoryName });

      if (categories) {
        newProduct.category.push(categories.id);
      }
    }

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductsByIdHandler = async (req, res) => {
  const { idProduct } = req.params;

  try {
    const product = await getProductById(idProduct);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const products = name
      ? await getProductByName(name)
      : await getAllProducts();

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProductsHandler,
  getProductsByIdHandler,
  getProductsHandler,
};
