//IMPORT
const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const {authentication} = require('../middleware/authentication')


//ROUTES
router.post("/",UserController.create);
router.post("/login", UserController.login);
router.get("/allUsers", authentication, UserController.getAll);
TODO://authentication (viene de la carpeta middleware) poner en las rutas: getall, delete user,update user (lo implementamos en aquellas rutas que queremos que solo se acceda si estas logeado

//EXPORTS
module.exports = router;