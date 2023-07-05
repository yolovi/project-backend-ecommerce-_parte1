//IMPORT
const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

//ROUTES
router.post("/",UserController.create)
router.post("/login", UserController.login)


//EXPORTS
module.exports = router;