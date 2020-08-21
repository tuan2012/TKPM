var express = require('express');
var router = express.Router();

const admin=require('../model/admin/admin');
const customer = require('../model/customer/customer');
router.get('/listUser',(req,res)=>{
    admin.getListUser(req,res);
});
router.get('/listHotel',(req,res)=>{
    admin.getListHotel(req,res);
});
module.exports = router;