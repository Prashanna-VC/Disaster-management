const {default:mongoose}=require("mongoose");
const userSchema=new mongoose.Schema({
    Disaster_name:{type:String,required:true},
    Disaster_location:{type:String,required:true},
    Disaster_detail:{type:String,required:true},
})
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;
