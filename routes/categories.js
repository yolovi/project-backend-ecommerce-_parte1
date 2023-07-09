//IMPORT
const express = require("express"); 
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();

//ROUTES
router.post("/", CategoryController.insert);
router.put("/id/:id", CategoryController.update);
router.delete("/id/:id", CategoryController.delete);
router.get("/id/:id", CategoryController.getByID);
router.get("/name/:name", CategoryController.getOneByName);
router.get("/getAll", CategoryController.getAll)




//EXPORTS
module.exports = router;