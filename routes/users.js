//IMPORT
const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

//ROUTES
router.post("/",UserController.create);
router.post("/login", UserController.login);
router.get("/allUsers", UserController.getAll);


//EXPORTS
module.exports = router;