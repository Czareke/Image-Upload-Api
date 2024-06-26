const Product = require("../model/productModel");


exports.createProduct = async (req, res) => {
  // console.log(req.body);
  const product = await Product.create(req.body);
  res.status(201).json({ product });
};

 exports.getAllProducts = async (req, res) => {
   const product = await Product.find({});
   res.status(200).json({ product });
 };
