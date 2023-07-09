//IMPORT
const express = require("express"); 
const OrderController = require("../controllers/OrderController");
const {authentication, isAdmin} = require('../middleware/authentication')

const router = express.Router();

//ROUTES
router.post("/", authentication, OrderController.insert);
router.get("/all", OrderController.getAll);

//EXPORTS
module.exports = router;