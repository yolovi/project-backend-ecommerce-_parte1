//IMPORT
const express = require("express"); // para levantar el servidor
const OrderController = require("../controllers/OrderController");

const router = express.Router();

//ROUTES
router.post("/", OrderController.insert);

//EXPORTS
module.exports = router;