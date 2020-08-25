drop database QLNT;
create database QLNT;
CREATE TABLE `admin` (
  `TenDangNhap` varchar(50) NOT NULL,
  `HoTen` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `SoDienThoai` varchar(50) DEFAULT NULL,
  `DiaChi` varchar(50) DEFAULT NULL,
  `SoCMND` varchar(20) DEFAULT NULL,
  `IdPhongTro` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

INSERT INTO `admin` (`TenDangNhap`, `HoTen`, `SoDienThoai`, `DiaChi`, `SoCMND`, `IdPhongTro`) VALUES
('admin1', 'Admin331', null, null, null, null);

-- --------------------------------------------------------

--
-- Table structure for table `chutro`
--

CREATE TABLE `chutro` (
  `TenDangNhap` varchar(50) NOT NULL,
  `HoTen` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `SoDienThoai` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `DiaChi` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `SoCMND` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `chutro`
--

INSERT INTO `chutro` (`TenDangNhap`, `HoTen`, `SoDienThoai`, `DiaChi`, `SoCMND`) VALUES
('chutro1', 'Nguyễn Văn C', '0398922105', '301 An Dương Vương', '321655432'),
('chutro2', 'Trần Văn Tí', '0989220231', '105 Trần Xuân Soạn', '531323243'),
('chutro3', 'La Thị Đơn', '0989220231', '25 Nguyễn Trãi', '531323243'),
('chutro4', 'Huỳnh Long', '0989220231', '255 Nguyễn Văn Cừ', '531323243');

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `TenDangNhap` varchar(50) NOT NULL,
  `MatKhau` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `isDelete` tinyint(1) DEFAULT '0',
  `PhanQuyen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`TenDangNhap`, `MatKhau`, `isDelete`, `PhanQuyen`) VALUES
('chutro1', '$2a$10$BdV2wUfpT0VD4LVybKItlOYoJ9CQCxM0jJYrPAd734RDD1E.NS5Va', 0, 2),
('chutro2', '$2a$10$BdV2wUfpT0VD4LVybKItlOYoJ9CQCxM0jJYrPAd734RDD1E.NS5Va', 0, 2),
('chutro3', '$2a$10$BdV2wUfpT0VD4LVybKItlOYoJ9CQCxM0jJYrPAd734RDD1E.NS5Va', 0, 2),
('chutro4', '$2a$10$BdV2wUfpT0VD4LVybKItlOYoJ9CQCxM0jJYrPAd734RDD1E.NS5Va', 0, 2),
('admin1', '$2a$10$BdV2wUfpT0VD4LVybKItlOYoJ9CQCxM0jJYrPAd734RDD1E.NS5Va', 0, 3),
('user1', '$2a$10$BdV2wUfpT0VD4LVybKItlOYoJ9CQCxM0jJYrPAd734RDD1E.NS5Va', 0, 1),
('user2', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user3', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user4', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user5', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user6', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user7', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user8', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user9', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user10', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user11', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user12', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1),
('user13', '$2a$10$6lUoVqIJYO/.AW/S5xe45ucpy4wrvhb0Q1GRcQL/5N8HzIFcM4LHm', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `loaitro`
--

CREATE TABLE `loaitro` (
  `Id` int(11) NOT NULL,
  `TenLoaiTro` varchar(50) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `loaitro`
--

INSERT INTO `loaitro` (`Id`, `TenLoaiTro`) VALUES
(1, 'Phòng trọ'),
(2, 'Kí túc xá'),
(3, 'Chung cư'),
(4, 'Ở ghép'),
(5, 'Nhà nguyên căn');

-- --------------------------------------------------------

--
-- Table structure for table `phongtro`
--

CREATE TABLE `phongtro` (
  `Id` int(11) NOT NULL,
  `TenTro` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `DiaChi` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `GhiChu` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `Gia` double DEFAULT NULL,
  `DienTich` int(11) DEFAULT NULL,
  `IdLoaiTro` int(11) DEFAULT NULL,
  `IdChuTro` varchar(50) DEFAULT NULL,
  `hinhAnh` varchar(100) DEFAULT NULL,
  `isDelete` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `phongtro`
--

INSERT INTO `phongtro` (`Id`, `TenTro`, `DiaChi`, `GhiChu`, `Gia`, `DienTich`, `IdLoaiTro`, `IdChuTro`, `hinhAnh`, `isDelete`) VALUES
(1, 'Dãy trọ đình Phong Phú', 'Quận 8', 'Dãy trọ tại 31 Phong Phú, Quận 8. Có 20 phòng, thoáng mát sạch sẽ. Có thể dọn vào vào đầu tháng 9', 3000000, 30, 1, 'chutro1', NULL, 0),
(2, 'Kí túc xá Quận 7', 'Quận 7', 'Kí túc xá dành cho học sinh sinh viên ở 31 Trần Xuân Soạn, Quận 7. Giảm 10% 3 tháng đầu cho sinh viên.', 5000000, 20, 2, 'chutro2', NULL, 0),
(3, 'Trọ Nguyễn Văn Cừ siêu hiện đại ', 'Quận 5', 'Dãy trọ tại 31 Phong Phú, Quận 8. Có 20 phòng, thoáng mát sạch sẽ. Có thể dọn vào vào đầu tháng 9', 6000000, 35, 1, 'chutro3', NULL, 0),
(4, 'Trọ An Dương Vương', 'Quận 5', 'Dãy trọ tại Quận 5. Có 20 phòng, thoáng mát sạch sẽ. Có thể dọn vào vào đầu tháng 9', 10000000, 40, 1, 'chutro4', NULL, 0),
(5, 'Khu trọ Trần Hưng Đạo', 'Quận 5', 'Dãy trọ tại Quận 5. Có 20 phòng, thoáng mát sạch sẽ. Có thể dọn vào vào đầu tháng 9', 1500000, 12, 1, 'chutro2', NULL, 0),
(6, 'Khu trọ Cao Văn Lầu', 'Quận 6', 'Dãy trọ tại Quận 6. Có 20 phòng, thoáng mát sạch sẽ. Có thể dọn vào vào đầu tháng 9', 1500000, 12, 1, 'chutro2', NULL, 0),
(7, 'Dãy trọ Hậu Giang', 'Quận 6', 'Dãy trọ tại Quận 6. Có 20 phòng, thoáng mát sạch sẽ. Có thể dọn vào vào đầu tháng 9', 1500000, 12, 1, 'chutro2', NULL, 0),
(8, 'Khu trọ Hùng Vương', 'Quận 5', 'Dãy trọ tại Quận 5. Có 20 phòng, thoáng mát sạch sẽ. Có thể dọn vào vào đầu tháng 9', 1500000, 12, 1, 'chutro2', NULL, 0),
(9, 'Trọ Trần Phú', 'Quận 5', 'Dãy trọ tại Quận 5. Có 20 phòng, thoáng mát sạch sẽ. Có thể dọn vào vào đầu tháng 9', 1500000, 12, 1, 'chutro2', NULL, 0),
(10, 'Khu trọ Đề Thám', 'Quận 1', 'Dãy trọ tại Quận 1. Có 20 phòng, thoáng mát sạch sẽ. Có thể dọn vào vào đầu tháng 9', 1500000, 12, 1, 'chutro2', NULL, 0),
(11, 'Khu trọ SS Quận 5', 'Quận 5', 'Dãy trọ tại Quận 5. Có 20 phòng, thoáng mát sạch sẽ. Có thể dọn vào vào đầu tháng 9', 1500000, 12, 1, 'chutro2', NULL, 0);
-- --------------------------------------------------------

--
-- Table structure for table `thongbao`
--

CREATE TABLE `thongbao` (
  `Id` int(11) NOT NULL,
  `TenThongBao` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `NoiDung` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `IdChuTro` varchar(50) DEFAULT NULL,
  `isDelete` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

INSERT INTO `thongbao` (`Id`, `TenThongBao`, `NoiDung`, `IdChuTro`, `isDelete`) VALUES
(1, 'Tăng tiền điện nước Tháng 9/2020', 'Vì một số lí do khó nói ra nên dãy trọ chúng ta tăng thêm tiền nước. Nếu có thắc mắc liên hệ chủ trọ. Cảm ơn', 'chutro1', 0),
(2, 'Phòng ngừa COVID', 'Vì tình hình căng thẳng nên mọi người trong trọ phải đeo khẩu trang khi xuống sảnh chung!! Cảm ơn', 'chutro1',0),
(3, 'Mất cắp','Hệ thống trọ có bố trí các camera chống trộm, nên mọi người đừng ăn trộm cướp nhé!!','chutro1',0),
(4, 'Tăng tiền điện nước Tháng 9/2020', 'Vì một số lí do khó nói ra nên dãy trọ chúng ta tăng thêm tiền nước. Nếu có thắc mắc liên hệ chủ trọ. Cảm ơn', 'chutro2', 0),
(5, 'Phòng ngừa COVID', 'Vì tình hình căng thẳng nên mọi người trong trọ phải đeo khẩu trang khi xuống sảnh chung!! Cảm ơn', 'chutro2',0),
(6, 'Mất cắp','Hệ thống trọ có bố trí các camera chống trộm, nên mọi người đừng ăn trộm cướp nhé!!','chutro2',0);
-- --------------------------------------------------------

--
-- Table structure for table `thongbaophongtro`
--

CREATE TABLE `thongbaophongtro` (
  `IdThongBao` int(11) NOT NULL,
  `IdPhongTro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

INSERT INTO `thongbaophongtro` (`IdThongBao`,`IdPhongTro`) VALUES
(1,1),
(2,1),
(3,1),
(4,5),
(5,5),
(6,5);

-- --------------------------------------------------------

--
-- Table structure for table `thongtinkhachhang`
--

CREATE TABLE `thongtinkhachhang` (
  `TenDangNhap` varchar(50) NOT NULL,
  `HoTen` varchar(50) DEFAULT NULL,
  `SoDienThoai` varchar(50) DEFAULT NULL,
  `DiaChi` varchar(50) DEFAULT NULL,
  `SoCMND` varchar(20) DEFAULT NULL,
  `IdPhongTro` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `thongtinkhachhang`
--

INSERT INTO `thongtinkhachhang` (`TenDangNhap`, `HoTen`, `SoDienThoai`, `DiaChi`, `SoCMND`, `IdPhongTro`) VALUES
('user1', 'Đức Huy', '0398911222', '301 Phú Đông 1', '3216778221', 5),
('user2', 'Đức Bo', '0919222312', '43 Kinh Dương Vương', '3215643211', 5),
('user3', 'Văn Nghị', '0125222312', '123 Cách mạng tháng 8', '3217633211', 5),
('user4', 'Mèo Ú', '039212315', '12 An Dương Vương', '3215643211', 5),
('user5', 'Lão Hạc', '0919222312', '75 Mai Xuân Thưởng', '3215643211', 5),
('user6', 'Cậu Vàng', '0919222312', '219 Kinh Dương Vương', '3215643211', 5),
('user7', 'Chí Phèo', '0919222312', '100 Hồng Bàng', '3215643211', 5),
('user8', 'Thị Nở', '0919222312', '32 Phạm Ngũ Lão', '3215643211', 1),
('user9', 'Xuân Đỏ', '0919222312', '11 Phan Xích Long', '3215643211', 1),
('user10', 'A Thìn', '0919222312', '66 Phạm Đình Hổ', '3215643211', 1),
('user11', 'Wei Xiao', '0919222312', '12 Hải Thượng Lãng Ông', '3215643211', 1),
('user12', 'Trần Tảo', '0919222312', '321 Phong Phú', '3215643211', 1),
('user13', 'Thị Mầu', '0919222312', '201 Nguyễn Tri Phương', '3215643211', 1);


--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`TenDangNhap`) USING BTREE;

--
-- Indexes for table `chutro`
--
ALTER TABLE `chutro`
  ADD PRIMARY KEY (`TenDangNhap`) USING BTREE;

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`TenDangNhap`) USING BTREE;

--
-- Indexes for table `loaitro`
--
ALTER TABLE `loaitro`
  ADD PRIMARY KEY (`Id`) USING BTREE;

--
-- Indexes for table `phongtro`
--
ALTER TABLE `phongtro`
  ADD PRIMARY KEY (`Id`) USING BTREE,
  ADD KEY `IdChuTro` (`IdChuTro`) USING BTREE,
  ADD KEY `IdLoaiTro` (`IdLoaiTro`) USING BTREE;

--
-- Indexes for table `thongbao`
--
ALTER TABLE `thongbao`
  ADD PRIMARY KEY (`Id`) USING BTREE,
  ADD KEY `IdChuTro` (`IdChuTro`) USING BTREE;

--
-- Indexes for table `thongbaophongtro`
--
ALTER TABLE `thongbaophongtro`
  ADD PRIMARY KEY (`IdThongBao`,`IdPhongTro`) USING BTREE,
  ADD KEY `IdPhongTro` (`IdPhongTro`) USING BTREE;

--
-- Indexes for table `thongtinkhachhang`
--
ALTER TABLE `thongtinkhachhang`
  ADD PRIMARY KEY (`TenDangNhap`) USING BTREE,
  ADD KEY `IdPhongTro` (`IdPhongTro`) USING BTREE;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`TenDangNhap`) REFERENCES `khachhang` (`TenDangNhap`);

--
-- Constraints for table `chutro`
--
ALTER TABLE `chutro`
  ADD CONSTRAINT `chutro_ibfk_1` FOREIGN KEY (`TenDangNhap`) REFERENCES `khachhang` (`TenDangNhap`);

--
-- Constraints for table `phongtro`
--
ALTER TABLE `phongtro`
  ADD CONSTRAINT `phongtro_ibfk_1` FOREIGN KEY (`IdChuTro`) REFERENCES `chutro` (`TenDangNhap`),
  ADD CONSTRAINT `phongtro_ibfk_2` FOREIGN KEY (`IdLoaiTro`) REFERENCES `loaitro` (`Id`);

--
-- Constraints for table `thongbao`
--
ALTER TABLE `thongbao`
  ADD CONSTRAINT `thongbao_ibfk_1` FOREIGN KEY (`IdChuTro`) REFERENCES `chutro` (`TenDangNhap`);

--
-- Constraints for table `thongbaophongtro`
--
ALTER TABLE `thongbaophongtro`
  ADD CONSTRAINT `thongbaophongtro_ibfk_1` FOREIGN KEY (`IdThongBao`) REFERENCES `thongbao` (`Id`),
  ADD CONSTRAINT `thongbaophongtro_ibfk_2` FOREIGN KEY (`IdPhongTro`) REFERENCES `phongtro` (`Id`);

--
-- Constraints for table `thongtinkhachhang`
--
ALTER TABLE `thongtinkhachhang`
  ADD CONSTRAINT `thongtinkhachhang_ibfk_1` FOREIGN KEY (`IdPhongTro`) REFERENCES `phongtro` (`Id`),
  ADD CONSTRAINT `thongtinkhachhang_ibfk_2` FOREIGN KEY (`TenDangNhap`) REFERENCES `khachhang` (`TenDangNhap`);
