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
module.exports = router;
