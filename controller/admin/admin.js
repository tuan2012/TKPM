const connectMySQL=require('../../connect/connectMySQL');
const getListUser=(req,res)=>{
    let sql="SELECT list.*, kh.isDelete from (SELECT ttkh.TenDangNhap, ttkh.HoTen, ttkh.DiaChi,ttkh.SoDienThoai from thongtinkhachhang ttkh UNION select ct.TenDangNhap,ct.HoTen,ct.DiaChi, ct.SoDienThoai from chutro ct) list INNER JOIN khachhang kh on list.TenDangNhap=kh.TenDangNhap ";
    connectMySQL.query(sql,(err,results,feild)=>{
        if(err) return err;
        res.render("admin", {user: results, hotel: null, admin: req.session.user });  
    });
};
const deleteUser=(req,res)=>{
    let tenDangNhap=req.params.id;
    let sql="update khachhang set isDelete=true where TenDangNhap=? ";
    connectMySQL.query(sql,tenDangNhap,(err,results)=>{
        if(err){ return err;}
        res.status(200).json({message:"Delete sucess"});    
    })
}
const getListHotel=(req,res)=>{
    let sql="select pt.*,ct.HoTen HoTenChuTro from phongtro pt inner join chutro ct on pt.IdChuTro=ct.TenDangNhap";
    connectMySQL.query(sql,(err,results,feild)=>{
        if(err)return err;
        res.render("admin", {hotel: results, user: null, admin: req.session.user})
    })
}
const deleteHotel=(req,res)=>{
    let id=req.params.id;
    let sql="update phongtro set isDelete=true where Id=?";
    connectMySQL.query(sql,id,(err,results)=>{
        if(err)return err;
        res.status(200).json({message:"Delete sucess"});
    })
}
module.exports={getListUser,
                deleteUser,
                getListHotel,
                deleteHotel};