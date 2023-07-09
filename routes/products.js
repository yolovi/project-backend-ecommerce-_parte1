//IMPORT
const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();
const {authentication, isAdmin} = require('../middleware/authentication')


//ROUTES
router.post('/', authentication, ProductController.insert); 
router.put('/id/:id', authentication, ProductController.update);
router.get('/id/:id',ProductController.getById);
router.get('/name_product/:name_product',ProductController.getOneByName);
router.get('/getAll', ProductController.getAll);
router.get('/price/:price', ProductController.getByPrice);
router.get('/price_range', ProductController.getByPriceRange);
router.get('/price_desc',ProductController.orderDescByPrice);
router.get('/price_asc',ProductController.orderAscByPrice);
router.delete('/id/:id', authentication, isAdmin, ProductController.delete);


//EXPORTS
module.exports = router;