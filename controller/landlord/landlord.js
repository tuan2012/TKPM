const connectMySQL=require('../../connect/connectMySQL');
var bCrypt = require('bcrypt-nodejs');
const addHotel=(req,res,pathFileImage)=>{
    
    let uri_Image=pathFileImage;
    const {tenTro,diaChi,ghiChu,gia,idLoaiTro,idChuTro}=req.body;
    const query="insert into phongtro(TenTro,DiaChi,GhiChu,Gia,IdLoaiTro,IdChuTro,HinhAnh) values(?,?,?,?,?,?,?)";
    connectMySQL.connect(query,[tenTro,diaChi,ghiChu,gia,idLoaiTro,idChuTro,uri_Image],(err,results,feild)=>{
        if(err)return err;
        res.status(200).json({message:"Insert Success"});
    })
    
}
//Xóa phòng trọ
//Tham số truyền vào là Id Phòng trọ
const deleteHotel=(req,res)=>{
    let {idPhongTro}=req.body;
    let sql="update phongtro set isDelete=true where Id=?";
    //lay id chu tro
    connectMySQL.query(sql,idPhongTro,(err,results,feild)=>{
        if(err) return err;
        res.status(200).json({message:"Delete Success"});
    });
    
}
//Lấy danh sách trọ
//Tham số truyền vào là tên đăng nhập Chu Tro
const getListHotel=(req,res)=>{
    let {tenDangNhap}=req.body;
    let sql="select *from phongtro where TenDangNhap=? ";
    //lay id chu tro
    connectMySQL.query(sql,tenDangNhap,(err,results,feild)=>{
        if(err) return err;
        res.status(200).json(results);
    });
}
//Cap Nhat Nha Trọ
//Tham số truyền vào
const updateHotel=(req,res)=>{
    let {idPhongTro,diaChi,ghiChu,gia}=req.body;
    let sql="update phongtro set DiaChi=?,GhiChu=?,Gia=? where id=? ";
    //lay id chu tro
    connectMySQL.query(sql,[diaChi,ghiChu,gia,idPhongTro],(err,results,feild)=>{
        if(err) return err;
        res.status(200).json({message:"Update Success"})
    });
   
}
//Lay danh sách user trong các phòng trọ của chủ trọ
//Tham số truyền vào là IdChuTro
const getListUser=(req,res)=>{
    let sql="select * from ((chutro ct join phongtro pt) on pt.TenDangNhap=?) join khachhang kh) on kh.IdPhongTro=pt.Id";
    let tenDangNhap=req.body;
    connectMySQL.query(sql,tenDangNhap,(err,results,feild)=>{
        if(err)return  err;
        res.status(200).json(results);
    });
}
// Xóa user ra khỏi trọ
//Tham sô truyền vào là IDUser(TenDangNhap)
const deleteUser=(req,res)=>{
    let {IdUser}=req.body;
    let sql="Update khachhang set IdPhongTro=null where Id=?";
    //lay id chu tro
    connectMySQL.query(sql,IdUser,(err,results,feild)=>{
        if(err) return err;
        res.status(200).json({message:"Delete Success"});
    });
    
}
//Thêm user vào trong nhà trọ
//Tham số truyền vào là Id khách hàng và id phòng trọ
const updateUser=(req,res)=>{
    let {tenDangNhap,IdPhongTro}=req.body;
    let sql="update thongtinkhachhang set IdPhongTro=? where TenDangNhap=? ";
    //lay id chu tro
    connectMySQL.query(sql,[IdPhongTro,tenDangNhap],(err,results,feild)=>{
        if(err) return err;
        res.status(200).json({message:"Add Success"})
    });
}
//Tạo Thông báo
//Các tông tin của thông báo
const createNotice= (req,res)=>{
    let {tenThongBao,noiDung,IdPhongTro,IdChuTro}=req.body;
    let sql="insert thongbao(TenThongBao,NoiDung,IdChuTro) values(?,?,?)";
    connectMySQL.query(sql,[tenThongBao,noiDung,IdChuTro],(err,results,feilds)=>{
        if(err) return err;
        else{
                let LastId;
                connectMySQL.query("select* from thongbao",(err,results,feilds)=>{
                    if(err)return  err;
                    LastId=results[results.length-1].Id;
            });
            let query="insert thongbaophongtro(IdThongBao,TdPhongTro) values(?,?)";
            IdPhongTro.forEach(e=> {
            // chưa làm
                    connectMySQL.query(query,[LastId,e],(err,results,feilds)=>{
                    if(err) return err;
                    res.status(200).json({message:"Insert success"});
                })
            });
        }
        
    })
}
//Lấy danh sách các thông báo đã tạo
//Tham số là IdChuTro
const getListNotice=(req,res)=>{
    let {IdChuTro}=req.body;
    let sql="select * from chutro ct inner join thongbao tb  on tb.IdChuTro=? inner join thongbaophongtro tbpt on tb.IdPhongTro=tbpt.IdPhongTro inner join phongtro pt on tbpt.IdPhongTro=pt.Id";
    connectMySQL.query(sql,IdChuTro,(err,results,feilds)=>{
        if(err)return err;
        res.status(200).json(results);
    });
}
const deleteNotice=(req,res)=>{
    let{Id}=req.body;
    let sql="update thongbao set isDelete=false where Id=?"
    connectMySQL.query(sql,Id,(err,results,feilds)=>{
        if(err)return err;
        res.json({message:"Delete Success"});
    })
}
const login=(res,res)=>{
    let {username,password}=req.body;
    let sql="select * from chutro where TenDangNhap=?";
    connectMySQL.query(sql,username,(err,results)=>{
        if(results.length>0&&bCrypt.compare(password,results[0].MatKhau))
        {
            res.redirect('/lanlord/dashboard')
        }
        res.redirect('/lanlord');
    })
}
const signup=(req,res)=>{
    let{tenDangNhap,matKhau,hoTen,Sdt,diaChi,soCMND}=req.body;
    let sql="insert chutro(TenDangNhap,MatKhau,HoTen,SoDienThoai,DiaChi,SoCMND) values(?,?,?,?,?,?)";
    connectMySQL.query(sql,[tenDangNhap,bCrypt.hashSync(matKhau, bCrypt.genSaltSync(10), null),hoTen,Sdt,diaChi,soCMND],(err,results)=>{
        if(err){res.redirect('/lanlord/signup'); return err;}
        res.redirect('/lanlord');
    })
}
module.exports={addHotel,
    getListHotel,
    updateHotel,
    deleteHotel,
    getListUser,
    deleteUser,
    updateUser
};