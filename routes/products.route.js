const express = require('express');
const { addProducts, addProductsData, productList, editProductDetails, productUpdateDataSave, productDelete } = require('../controllers/productsController');
const router = express.Router();

router.get('/addProduct',addProducts);
router.post('/addProduct',addProductsData);
router.get('/product',productList);
router.get('/editProduct/:id',editProductDetails);
router.post('/editProduct/:id',productUpdateDataSave);
router.get("/deleteProduct/:id",productDelete)

module.exports = router;