const { Router } = require("express");

const productsRoutes = require("./productsRoutes");
const categoryRoutes = require("./categoryRoutes");
const buyProduct = require("./buyProductRoutes");
const router = Router();

router.use("/products", productsRoutes);
router.use("/category", categoryRoutes);
router.use("/purchases", buyProduct);

module.exports = router;
