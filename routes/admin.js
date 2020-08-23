var express = require('express');
var router = express.Router();

const admin=require('../controller/admin/admin');
const customer = require('../controller/customer/customer');
router.get('/listUser',(req,res)=>{
    admin.getListUser(req,res);
});
router.get('/listHotel',(req,res)=>{
    admin.getListHotel(req,res);
});
router.get('/deleteUser/:id',(req,res)=>{
    admin.deleteUser(req,res);
})
router.get('/deleteHotel/:id',(req,res)=>{
    admin.deleteHotel(req,res);
})
module.exports = router;