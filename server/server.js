const express=require("express")
const bp=require("body-parser")

const {mongoose}=require("./db/mongoose.js")
const {todo}=require("./models/todo.js")
const {user}=require("./models/user.js")

var app=express();
app.use(bp.json())

app.post("/todo",(req,res)=>{
var t =new todo({
	text:req.body.text
})

t.save().then((doc)=>{
res.send(doc);
},(err)=>{
res.status(400).send(err)
});
})
app.listen(3000);