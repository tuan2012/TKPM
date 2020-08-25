const connectMySQL=require('../../connect/connectMySQL');

const getProductForm=(req,res)=>{
    let area = req.body.area;
    let acreage = req.body.acr;
    let price = req.body.price;
    let type = req.body.type;
    switch (area) {
        case 'Q1': {
            area = 'Quận 1';
            break;
        }
        case 'Q2': {
            area = 'Quận 2';
            break;
        }
        case 'Q3': {
            area = 'Quận 3';
            break;
        }
        case 'Q4': {
            area = 'Quận 4';
            break;
        }
        case 'Q5': {
            area = 'Quận 5';
            break;
        }
        case 'Q6': {
            area = 'Quận 6';
            break;
        }
        case 'Q7': {
            area = 'Quận 7';
            break;
        }
        case 'Q8': {
            area = 'Quận 8';
            break;
        }
        case 'Q9': {
            area = 'Quận 9';
            break;
        }
        case 'Q10': {
            area = 'Quận 10';
            break;
        }
        case 'Q11': {
            area = 'Quận 11';
            break;
        }
    }
    
    let sql=`SELECT * FROM phongtro WHERE Gia<=${price} AND DienTich<=${acreage} AND DiaChi=N'${area}' AND idLoaiTro=${type}`;
 
    connectMySQL.query(sql,(err,results,feild)=>{
        if(err) return err;
        console.log(results);
        res.render("custommer/index", {listHotel: results,
                                        pagi: null,
                                        user: req.session.user});
    });
};

const productCategory = (req,res) => {
    let id = req.params.id;
    let sql=`SELECT * FROM phongtro WHERE phongtro.IdLoaiTro=${id}`;
    connectMySQL.query(sql,(err,results,feild)=>{
        if(err) return err;
        res.render("custommer/index", {listHotel: results,
                                        pagi: null,
                                        user: req.session.user});
    });
}

module.exports = {getProductForm,
                productCategory};