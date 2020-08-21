const connect=require('mysql').createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
  });
  
  connect.connect((err)=>{
    if(err) return err;
    console.log("Connected to database QLNT");
  });
  module.exports=connect;