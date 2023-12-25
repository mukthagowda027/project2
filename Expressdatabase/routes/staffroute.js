const express = require('express');
const bcrypt=require('bcrypt');
const formidable = require('express-formidable');
const Staff = require('../models/staffschema');

const router = express.Router();

router.post('/createstaff', formidable(), async (req, res) => {
  try {
    const { name, email, password, role } = req.fields;

    const existingStaff = await Staff.findOne({ email });

    if (existingStaff) {
      return res.status(400).json({ error: 'Email already exists' });
    }


    let enc_password = await bcrypt.hash(password, 10)
    
    const staff =await Staff.create({
      name:name,
      email:email,
      password:enc_password,
      role:role
    });

    res.json(staff);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/staffid/:id',formidable(), async (req, res) => {
    try {
       const id=req.params.id;
      const staffMembers = await Staff.findOne({_id:id});
      res.json(staffMembers);
    } 
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.get('/getalldetailsofstaff',formidable(), async (req, res) => {
  try {
    const staffMembers = await Staff.find();
    res.json(staffMembers);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
