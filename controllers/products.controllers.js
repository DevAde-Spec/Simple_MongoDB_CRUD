const product = require('../models/product.model')

const getProducts = async (req, res) => {
  try {
    const Products = await product.find({});
    res.status(200).json({ Products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const productId = await product.findById(id);
    res.status(200).json({ productId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const Product = await product.create(req.body);
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const Product = await product.findByIdAndUpdate(id, req.body);

    if (!Product) {
      res.status(404).json({ success: false, message: "Product not found" });
    }

    const updatedProduct = await product.findById(id);
    res
      .status(200)
      .json({ updatedProduct: updatedProduct, message: "success" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const Product = await product.findByIdAndDelete(id);

    if (!Product) {
      res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
