var express = require('express');
var router = express.Router();

const mdHome=require('../controller/customer/customer');
const product=require('../controller/product/product');
const landlords=require('../controller/landlord/landlord');

router.get('/', (req,res) => {
  res.redirect('/page=1');
})
/* GET home page. */
router.get('/page=:num', function(req, res, next) {
  if (req.session.decen==null) req.session.decen = 0;
  console.log(req.session.decen);
  mdHome.listHotel(req,res);
});

router.get('/category=:id', (req,res)=> {
  product.productCategory(req,res);
})

router.get("/single/:id",(req,res,next)=>{
  mdHome.singleProduct(req,res);
});

router.post("/product", (req,res,next)=> {
  product.getProductForm(req,res);
  //res.redirect(`/price=${price}&area=${acr}&acreage=${acreage}&type=${type}`);
})

router.post('/signup',(req,res)=>{
  landlords.signup(req,res);
})

router.get('/signup',(req,res)=>{
  res.render('signup');
})

router.post('/login',(req,res)=>{
  landlords.login(req,res);
})

router.get('/login',(req,res)=>{
  res.render("login");
})

router.get('/logout', (req,res)=>{
  req.session.decen = 0;
  req.session.user = null;
  res.redirect('/page=1');
})

router.get('/notice', (req,res)=>{
  landlords.getNotice(req,res);
})

router.get('/apply=:id', (req, res) => {
  landlords.updateUser(req,res);
})
module.exports = router;
