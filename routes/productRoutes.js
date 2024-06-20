var express = require('express');
var router = express.Router();

const productControllers = require('../controllers/productController');

router.get('/', productControllers.getAllProducts);

router.post('/', productControllers.createProduct);

router.get('/:id', productControllers.getSpecificProduct);

module.exports = router;