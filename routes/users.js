//IMPORT
const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

//ROUTES
router.post('/',UserController.create)


//EXPORTS
module.exports = router;