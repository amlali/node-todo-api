
var mongoose = require('mongoose');

var Users=mongoose.model('Users',{
  Email:{
    type:String ,
    required:true,
    trim:true,
    minlangth:1

  }
});
module.exports={
Users
};
