//IMPORT
const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

//ROUTES
router.post('/',ProductController.insert); //post se refiere al metodo en postman // insert al nombre del metodo del modelo product
router.put('/id/:id',ProductController.update);
router.delete('/id/:id',ProductController.delete);
router.get('/id/:id',ProductController.getById);
router.get('/name_product/:name_product',ProductController.getOneByName);
router.get('/price/:price', ProductController.getByPrice);
router.get('/price_range', ProductController.getByPriceRange);
router.get('/price_desc',ProductController.orderDescByPrice);
router.get('/price_asc',ProductController.orderAscByPrice)


//EXPORTS
module.exports = router;