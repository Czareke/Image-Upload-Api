const express = require("express");
const router = express.Router();

const productController = require("./../controller/productController")
const uploadsController = require("./../controller/uploadsController");

router.route('/').get(productController.getAllProducts).post(productController.createProduct)
router.route("/uploads").post(uploadsController.uploadProductImageCloud);

module.exports = router