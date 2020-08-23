const connectMySQL=require('../../connect/connectMySQL');
//Lấy danh sách nhà trọ chưa bị xóa
const listHotel=(req,res)=>{
    let sql="select *from phongtro pt where pt.isDelete=false";
    connectMySQL.query(sql,(err,results,fields)=>{
        if(err) return err;
        res.render("custommer/index",{listHotel:results});
    });
}
//Xem chi tiết từng nhà trọ
//Tham sô truyền vào là idPhongTro
const singleProduct=(req,res)=>{
    let id=req.params.id;
    let sql="select *from phongtro where id=?";
    connectMySQL.query(sql,[id],(err,results,fields)=>{
        if(err)return err;
        res.render("custommer/detail", {singleHotel:results[0]}); // Huy xem chi tiet san pham
    });
}
//Xem thông báo của nhà trọ
//Tham số truyền vào là id customer(TendangNhap)
const watchNotice=(req,res)=>{
    let idCustomer=req.body;
    let sql="select * from thongtinkhachhang where TenDangNhap=? ";
    connectMySQL.query(sql,idCustomer,(err,results,feilds)=>{
        if(err)return err;
        else if(results[0].IdPhongTro!=null)
        {
            sql="select * from thongbaophongtro tbpt inner join thongbao tb on tbpt.IdThongBao=tb.Id where tbpt.IdPhongTro=? and tb.isDelete=false";
            connectMySQL.query(sql,results[0].IdPhongTro,(err,results,feilds)=>{
                if(err)return err;
                res.status(200).json(results);
            })
        }
    })
}
module.exports={listHotel,
                singleProduct};