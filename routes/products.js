//IMPORT
const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

//ROUTES
router.post('/',ProductController.post);
router.put('/id/:id',ProductController.put);
router.delete('/id/:id',ProductController.delete);
router.get('/id/:id',ProductController.getById);
router.get('/name_product/:name_product',ProductController.getOneByName);
router.get('/price/:price', ProductController.getByPrice);



//EXPORTS
module.exports = router;