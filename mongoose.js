const mongoose =require("mongoose");

mongoose.Promise=global.Promise
mongoose.connect("mongodb://localhost:27017/Todo",{ useNewUrlParser: true })

var todo=mongoose.model("todo",{
text:{
	type:String
},
completed:{
	type:Boolean
},
completedAt:{
	type:Number
}
})
var newtodo =new todo({
	text:"mnsd",
	completed:false,
	completedAt:-1
}); 

newtodo.save().then((doc)=>{
console.log(JSON.stringify(doc));
},(err)=>{
	console.log(error);
})