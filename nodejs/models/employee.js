const mongoose=require('mongoose');
var Employee=mongoose.model('employee',{
  name:{type:String},
  position:{type:String},
  office:{type:String},
  salary:{type:Number}
});
module.exports = { Employee };