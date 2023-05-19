const { Router } = require("express");
const { processPaymentHandler } = require("../handlers/processPaymentHandler");

const router = Router();

router.post('/', processPaymentHandler);

module.exports = router;