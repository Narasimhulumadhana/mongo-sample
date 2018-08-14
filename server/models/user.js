
const mongoose=require('mongoose')
var user=mongoose.model("User",{
name:{
	type:String,
	requied:true,
	min:1,
	trim:true
},
email:{
	type:String
},
id:{
	type:Number
}
})
module.exports={user}
