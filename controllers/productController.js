const { application } = require('express');
const Product = require('../models/productModel');


exports.getAllProducts = async (req, res) => {
  try {
   const product = await Product.find();
   res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }

};

exports.getAllProducts = async (req, res) => {
  try {
   const product = await Product.find();
   res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }

};

exports.createProduct = async (req, res) => {
    try {
     const product = await Product.find();
     res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  
  };
  

