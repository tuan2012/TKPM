var express = require('express');
var router = express.Router();
const upload=require('../connect/multer');
const landlords=require('../controller/landlord/landlord');


/* GET users listing. */
router.get('/addHotel', function(req, res, next){
    if(req.session.decen===2) {
        next();
        }
    else res.redirect('/page=1');
});

router.get('/addHotel', function(req, res, next) {
    res.render('./form', {user: req.session.user});
});

router.post('/addHotel', function (req, res) {
    upload.single('image-hotel')(req, res, function (err) {
    //   if (err instanceof multer.MulterError) {
    //     // A Multer error occurred when uploading.
    //         return err;
    //   } else if (err) {
    //     // An unknown error occurred when uploadingx.
    //         return err;
    //   }
      landlords.addHotel(req,res,res.req.file.file);
      // Everything went fine.
    });
});

router.get('/listHotel', function(req, res, next){
    if(req.session.decen===2) {
        next();
        }
    else res.redirect('/page=1');
});
router.get('/listHotel',(req, res, next)=> {
    landlords.getListHotel(req,res);
});

router.delete('/listHotel',(req, res)=> {
   landlords.deleteHotel(req,res);
});

router.put('/listHotel',(req, res)=> {
    landlords.updateHotel(req,res);
 });

router.get('/listUser=:id',(req,res)=>{
    landlords.getListUser(req,res);
});

router.get('/deleteUser=:id',(req,res)=>{
    landlords.deleteUser(req,res);
});

router.put('/listUser',(req,res)=>{
    landlords.updateUser(req,res);
});

router.get('/dashboard',(req,res)=>{
    res.send("Dashboard");
})

router.get('/myNotice', (req,res)=>{
    landlords.getListNotice(req,res);
})

router.post('/createNotice', (req,res)=>{
    landlords.createNotice(req,res);
})
  
module.exports = router;
