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
    let {TenDangNhap}=req.session.user;
    console.log(TenDangNhap);
    let sql="select *from phongtro where IdChuTro=? ";
    //lay id chu tro
    connectMySQL.query(sql,TenDangNhap,(err,results,feild)=>{
        if(err) return err;
        res.render("table", {listHotel: results,
                            user: req.session.user,
                            isHotel: true,
                            isUser: false});
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
    let id = req.params.id;
    let sql=`select * from phongtro pt, thongtinkhachhang ttkh where pt.Id=ttkh.IdPhongTro AND pt.Id=${id}`;
  
    connectMySQL.query(sql,(err,results,feild)=>{
        if(err)return  err;
        var tempHotel = []
        if (results.length === 0) {
            results[0] = {TenTro: null, Gia: null, DienTich: null, DiaChi: null};
        }
        res.render("table", {listUser: results,
                            user: req.session.user,
                            isHotel: false,
                            isUser: true});
    });
}
// Xóa user ra khỏi trọ
//Tham sô truyền vào là IDUser(TenDangNhap)
const deleteUser=(req,res)=>{
    let idUser=req.params.id;
    let sql=`Update thongtinkhachhang set IdPhongTro=null where TenDangNhap='${idUser}'`;
    //lay id chu tro
    connectMySQL.query(sql,(err,results,feild)=>{
        if(err) return err;
        res.status(200).json({message:"Delete Success"});
    });
    
}
//Thêm user vào trong nhà trọ
//Tham số truyền vào là Id khách hàng và id phòng trọ
const updateUser=(req,res)=>{
    let tenDangNhap = req.session.user.TenDangNhap;
    let idPhongTro = req.params.id;
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
    let tenThongBao = req.body.name;
    let noiDung = req.body.content;
    let IdChuTro = req.session.user.TenDangNhap;
    let IdTro = req.body.idTro;
    let sqlGetAnnounce = "select * from thongbao";
    connectMySQL.query(sqlGetAnnounce, (err,results,feild)=>{
        if(err) return err;
        var rs = results;
        var length = rs.length +1;
        let sql=`insert thongbao(Id,TenThongBao,NoiDung,IdChuTro) values(${length},'${tenThongBao}','${noiDung}','${IdChuTro}')`;
        console.log(sql);
        connectMySQL.query(sql, (err,results,feild)=>{
            if(err) return err;
            let sql = `insert thongbaophongtro(IdThongBao,IdPhongTro) values(${length},'${IdTro}')`;
            connectMySQL.query(sql, (err,results,feild)=>{
            res.redirect('/landlords/myNotice');
             });
         });
    });
    // connectMySQL.query(sql,[tenThongBao,noiDung,IdChuTro],(err,results,feilds)=>{
    //     if(err) return err;
    //     else{
    //             let LastId;
    //             connectMySQL.query("select* from thongbao",(err,results,feilds)=>{
    //                 if(err)return  err;
    //                 LastId=results[results.length-1].Id;
    //         });
    //         let query="insert thongbaophongtro(IdThongBao,TdPhongTro) values(?,?)";
    //         IdPhongTro.forEach(e=> {
    //         // chưa làm
    //                 connectMySQL.query(query,[LastId,e],(err,results,feilds)=>{
    //                 if(err) return err;
    //                 res.status(200).json({message:"Insert success"});
    //             })
    //         });
    //     }
    //})
}
//Lấy danh sách các thông báo đã tạo
//Tham số là IdChuTro
const getListNotice=(req,res)=>{
    let IdChuTro = req.session.user.TenDangNhap;
    let sql=`select * from thongbaophongtro tbpt, thongbao tb, phongtro pt where tbpt.IdThongBao = tb.Id and tb.IdChuTro = '${IdChuTro}' and pt.Id=tbpt.IdPhongTro`;
    connectMySQL.query(sql,(err,results,feilds)=>{
        var notice = results;
        let newsql = `select * from phongtro, chutro where phongtro.IdChuTro=chutro.TenDangNhap and chutro.TenDangNhap='${IdChuTro}'`;
        connectMySQL.query(newsql,(err,results,feilds)=>{
        if(err)return err;
        var option = results;
        console.log(option);
        res.render("announc", {user: req.session.user,
                                rs: notice,
                                option: option
        });
    });
    });
}
//danh sach thong bao cua User
const getNotice=(req,res)=>{
    let IdUser = req.session.user.TenDangNhap;
    let sql=`select * from phongtro pt, thongbaophongtro tbpt, thongbao tb, thongtinkhachhang ttkh where tbpt.IdThongBao = tb.Id and ttkh.IdPhongTro = tbpt.IdPhongTro and ttkh.TenDangNhap='${IdUser}' and pt.Id=tbpt.IdPhongTro`;
    console.log(sql);
    connectMySQL.query(sql,(err,results,feilds)=>{
        if(err)return err;
        console.log(results);
        res.render("announc", {user: req.session.user,
                                rs: results
        });
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
        if(results.length>0)
        {
            console.log(matKhau+"  "+results[0].MatKhau)
            console.log(bCrypt.compareSync(matKhau,results[0].MatKhau))
            if(results[0].PhanQuyen==1){
                let sql="select * from khachhang, thongtinkhachhang where khachhang.TenDangNhap=? and khachhang.TenDangNhap=thongtinkhachhang.TenDangNhap";
                connectMySQL.query(sql,tenDangNhap,(err,results)=>{
                req.session.decen = 1;
                req.session.user = results[0];
                res.redirect('/page=1');
                })}
            else  if(results[0].PhanQuyen==2) {
                let sql="select * from khachhang, chutro where khachhang.TenDangNhap=? and khachhang.TenDangNhap=chutro.TenDangNhap";
                connectMySQL.query(sql,tenDangNhap,(err,results)=>{
                req.session.decen = 2;
                req.session.user = results[0];
                res.redirect("/page=1")          
                 })}
            else {
                let sql="select * from khachhang, admin where khachhang.TenDangNhap=? and khachhang.TenDangNhap=admin.TenDangNhap";
                connectMySQL.query(sql,tenDangNhap,(err,results)=>{
                req.session.decen = 3;
                req.session.user = results[0];
                res.redirect("/admin/listUser")
                })}
        }
        else
            res.redirect('login');
    })
}
const signup=(req,res)=>{
    let{tenDangNhap,matKhau,hoTen,soDienThoai,diaChi,soCMND,phanQuyen}=req.body;
    let sql="insert khachhang(TenDangNhap,MatKhau,PhanQuyen) values(?,?,?)";
    connectMySQL.query(sql,[tenDangNhap,bCrypt.hashSync(matKhau),phanQuyen],(err,results)=>{
        if(err) {
            console.log(err)
            res.redirect('/signup')
            }
        else
        {
            if(phanQuyen==1) {
                sql="insert thongtinkhachhang(TenDangNhap,HoTen,SoDienThoai,DiaChi,soCMND) values(?,?,?,?,?)";
                connectMySQL.query(sql,[tenDangNhap,hoTen,soDienThoai,diaChi,soCMND],(err,results)=>{
                    if(results.affectedRows>0) 
                    {   
                        let sql="select * from khachhang, thongtinkhachhang where khachhang.TenDangNhap=? and khachhang.TenDangNhap=thongtinkhachhang.TenDangNhap";
                        connectMySQL.query(sql,tenDangNhap,(err,results)=>{
                        req.session.decen = 1;
                        req.session.user = results[0];
                        res.redirect('/page=1');
                        })
                    }
                })
                }
            else if(phanQuyen==2) {
                sql="insert chutro(TenDangNhap,HoTen,SoDienThoai,DiaChi,SoCMND) values(?,?,?,?,?)";
                connectMySQL.query(sql,[tenDangNhap,hoTen,soDienThoai,diaChi,soCMND],(err,results)=>{
                    if(results.affectedRows>0) 
                    {   
                        let sql="select * from khachhang, chutro where khachhang.TenDangNhap=? and khachhang.TenDangNhap=chutro.TenDangNhap";
                        connectMySQL.query(sql,tenDangNhap,(err,results)=>{
                        req.session.decen = 2;
                        req.session.user = results[0];   
                        res.redirect('/page=1');    
                         })}
                       
                    })
                }
            else{
                sql="insert Admin(TenDangNhap,HoTen,SoDienThoai,DiaChi,SoCMND) values(?,?,?,?,?)";
                connectMySQL.query(sql,[tenDangNhap,hoTen,soDienThoai,diaChi,soCMND],(err,results)=>{
                    if(results.affectedRows>0) 
                    {   
                        let sql="select * from khachhang, admin where khachhang.TenDangNhap=? and khachhang.TenDangNhap=admin.TenDangNhap";
                        connectMySQL.query(sql,tenDangNhap,(err,results)=>{
                        req.session.decen = 3;
                        req.session.user = results[0];
                        res.redirect("/admin/listUser")
            })
        }
        })
        }
}})}
module.exports={addHotel,
    getListHotel,
    updateHotel,
    deleteHotel,
    getListUser,
    deleteUser,
    updateUser,
    login,
    signup,
    getListNotice,
    getNotice,
    createNotice
};