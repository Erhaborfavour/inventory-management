const express = require('express');
const { createProduct, getSingleProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/Product');
const verifyToken = require('../middlewares/verifyToken')
const router = express.Router();
const upload = require('../middlewares/fileUpload');

//create a product
router.post('/', verifyToken, upload.single('image'), createProduct)

//get specific product by a user
router.get('/:id', verifyToken, getSingleProduct)

//get all products
router.get('/',verifyToken, getAllProducts)

//update a product
router.put('/update/:id', verifyToken, updateProduct);

//delete a product
router.delete('/delete/:id', verifyToken, deleteProduct);


module.exports = router;