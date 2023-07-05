// IMPORT
const express = require("express"); // para levantar el servidor
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();


//ROUTES
router.post("/", CategoryController.insert);
router.put("/id/:id", CategoryController.update);
router.delete("/id/:id", CategoryController.delete)


//EXPORTS
module.exports = router;