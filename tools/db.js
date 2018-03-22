// 链接mongoose控制数据库

const mg = require('mongoose')
mg.connect('mongodb://localhost:27017/daowei')
mg.connection.once('open',function (err) {
  if(!err){
    console.log('database connected!');
  }
})