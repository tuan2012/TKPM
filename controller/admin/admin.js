const connectMySQL=require('../../connect/connectMySQL');
const getListUser=(req,res)=>{
    let sql="select kh.*,pt.TenTro,pt.DiaChi DiaChiPhongTro,ct.HoTen TenChuTro from khachhang kh INNER  join thongtinkhachhang ttkh ON kh.TenDangNhap=ttkh.TenDangNhap INNER  join phongtro pt on pt.id=ttkh.IdPhongTro INNER  join chutro ct on ct.Id=pt.IdChuTro;";
    connectMySQL.query(sql,(err,results,feild)=>{
        if(err) return err;
        res.json(results);  
    });
};
const getListHotel=(req,res)=>{
    let sql="select pt.*,ct.HoTen HoTenChuTro from phongtro pt inner join chutro ct on pt.IdChuTro=ct.Id";
    connectMySQL.query(sql,(err,results,feild)=>{
        if(err)return err;
        res.json(results);
    })
}
module.exports={getListUser,
                getListHotel};