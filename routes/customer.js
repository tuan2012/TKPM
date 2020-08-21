var express = require('express');
var router = express.Router();

const mdHome=require('../controller/customer/customer');
/* GET home page. */
router.get('/', function(req, res, next) {
  mdHome.listHotel(req,res);
});
router.get("/single/:id",(req,res,next)=>{
  mdHome.singleProduct(req,res);
});
router.get("/login",(req,res,next)=>{
  res.render("login");
})
router.post("/login",(req,res,next)=>{
  
})
module.exports = router;
