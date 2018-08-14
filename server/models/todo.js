const mongoose=require('mongoose')
var todo=mongoose.model("todo",{
text:{
	type:String,
	required:true,
	trim:true
},
completed:{
	type:Boolean
},
completedAt:{
	type:Number
}
})
module.exports={todo}