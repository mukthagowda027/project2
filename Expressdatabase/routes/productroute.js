const express=require('express');
require('dotenv').config();
const formidable=require('express-formidable');
const multer=require('multer');
const router=express.Router();

const Product=require("../models/productschema");
const Vendor=require('../models/vendorschema');

//const destination=process.env.UPLOAD_DIR;

//console.log(UPLOAD_DIR)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/uploads"); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload=multer({storage:storage});

router.get('/getproducts',async function(req, res){
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

router.post('/addproducts', upload.single('imageUrl'),async function(req, res){
try{

        let{name,description,price,category,brand,color,size,inventory,createdAt,vendorId}=req.body;
        const imageUrl = req.file.filename;

        const vendor = await Vendor.findById(vendorId);
        if (!vendor) {
          return res.status(404).json({ error: 'Vendor not found' });
        }

     const existingProduct = await Product.findOne({ name, vendorId });

    if (existingProduct) {
      existingProduct.inventory += parseInt(inventory, 10) || 0;
      await existingProduct.save();
      return res.json(existingProduct);
    }

    const product = await Product.create({
      name: name,
      description: description,
      price: price,
      category: category,
      brand: brand,
      color: color,
      size: size,
      inventory: inventory,
      imageUrl: imageUrl,
      createdAt: createdAt,
      vendorId: vendorId,
      quantity: parseInt(inventory, 10) || 0,
    });

    vendor.products.push(product._id);
    await vendor.save();

    res.json(product)
}
   catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.get('/getproducts', async function(req, res) {

    try {
      const { category } = req.query;
      
      const query = category ? { category } : {};
      const products = await Product.find(query);
      res.json(products);

    } 
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports=router;