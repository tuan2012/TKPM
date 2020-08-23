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
    let sql="select * from phongtro pt inner join thongtinkhachhang ttkh on ttkh.IdPhongTro=pt.Id where pt.IdChuTro=?";
    let tenDangNhap=req.body;
    connectMySQL.query(sql,tenDangNhap,(err,results,feild)=>{
        if(err)return  err;
        res.status(200).json(results);
    });
}
// Xóa user ra khỏi trọ
//Tham sô truyền vào là IDUser(TenDangNhap)
const deleteUser=(req,res)=>{
    let {idUser}=req.body;
    let sql="Update khachhang set IdPhongTro=null where Id=?";
    //lay id chu tro
    connectMySQL.query(sql,idUser,(err,results,feild)=>{
        if(err) return err;
        res.status(200).json({message:"Delete Success"});
    });
    
}
//Thêm user vào trong nhà trọ
//Tham số truyền vào là Id khách hàng và id phòng trọ
const updateUser=(req,res)=>{
    let {tenDangNhap,idPhongTro}=req.body;
    let sql="update thongtinkhachhang set IdPhongTro=? where TenDangNhap=? ";
    //lay id chu tro
    connectMySQL.query(sql,[idPhongTro,tenDangNhap],(err,results,feild)=>{
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
const login=(req,res)=>{
    let {tenDangNhap,matKhau}=req.body;
    let sql="select * from khachhang where TenDangNhap=?";
    connectMySQL.query(sql,tenDangNhap,(err,results)=>{
        console.log(results)
        if(results.length>0)
        {
            console.log(matKhau+"  "+results[0].MatKhau)
            console.log(bCrypt.compareSync(matKhau,results[0].MatKhau))
            if(results[0].PhanQuyen==1)
                res.redirect('/');
            else  if(results[0].PhanQuyen==2)
                res.redirect("/landlords/dashboard")
            else
                res.send("a")
        }
        else
            res.redirect('login');
    })
}
const signup=(req,res)=>{
    let{tenDangNhap,matKhau,hoTen,soDienThoai,diaChi,soCMND,phanQuyen}=req.body;
    let sql="insert khachhang(TenDangNhap,MatKhau,PhanQuyen) values(?,?,?)";
    connectMySQL.query(sql,[tenDangNhap,bCrypt.hashSync(matKhau),phanQuyen],(err,results)=>{
        
        if(err) res.redirect('signup')
        else
        {
            if(phanQuyen==1)
                sql="insert thongtinkhachhang(TenDangNhap,HoTen,SoDienThoai,DiaChi,soCMND) values(?,?,?,?,?)";
            else if(phanQuyen==2)
                sql="insert chutro(TenDangNhap,HoTen,SoDienThoai,DiaChi,SoCMND) values(?,?,?,?,?)";
            else
                sql="insert Admin(TenDangNhap,HoTen,SoDienThoai,DiaChi,SoCMND) values(?,?,?,?,?)";
            connectMySQL.query(sql,[tenDangNhap,hoTen,soDienThoai,diaChi,soCMND],(err,results)=>{
                if(results.affectedRows>0)
                {
                    res.redirect('/landlords');
                }
            })
        }
       
    })
}
module.exports={addHotel,
    getListHotel,
    updateHotel,
    deleteHotel,
    getListUser,
    deleteUser,
    updateUser,
    login,
    signup
};