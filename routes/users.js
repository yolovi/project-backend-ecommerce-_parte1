//IMPORT
const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const {authentication} = require('../middleware/authentication')


//ROUTES
router.post("/",UserController.create);
router.post("/login", UserController.login);
router.get("/allUsers", authentication, UserController.getAll);
router.get("/orders",authentication, UserController.getOrdersUser);
router.delete('/logout',authentication,UserController.logout)


//EXPORTS
module.exports = router;