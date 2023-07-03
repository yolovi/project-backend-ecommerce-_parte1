//IMPORT
const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

//ROUTES
router.post('/',ProductController.post);
router.put('/id/:id',ProductController.put)


//EXPORTS
module.exports = router;