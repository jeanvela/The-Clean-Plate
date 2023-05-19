const { Router } = require("express");

const productsRoutes = require("./productsRoutes");
const categoryRoutes = require("./categoryRoutes");
const authRoutes = require("./authRoutes");

const router = Router();

router.use("/products", productsRoutes);
router.use("/category", categoryRoutes);
router.use("/auth", authRoutes);

module.exports = router;
