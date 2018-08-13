const MangoClient=require("mongodb").MongoClient;
const assert = require('assert');
MangoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	assert.equal(null,err);
	var db = client.db('mytestingdb');

	/*db.collection("todo").insertOne({
		name:"das",
		number:1
	},(err,result)=>{
		if(err){
			return console.log(err);
		}

		console.log(JSON.stringify(result.ops));
	})*/

	db.collection("Users").find({name:"das"}).count().then((count)=>{

console.log(count);
	},(err)=>{
		console.log(err);
	})
});