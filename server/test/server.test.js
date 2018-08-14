const expect=require("expect")
const request=require("supertest")

const {app}=require("./../server");
const {todo}=require("./../models/todo")

beforeEach((done)=>{
	todo.remove({}).then(()=>done());
})
describe("POST /todo",()=>{
	it("expecitn to do ",(done)=>{
		var text="todo text"
		
		request(app)
		.post("/todo")
		.send({text})
		.expect(200)
		.expect((res)=>{
			expect(res.body.text).toBe(text);
		})
		.end((err,res)=>{
			if(err){
				return done(err);
			}
			todo.find({}).then((res)=>{
				expect(res.length).toBe(1);
				expect(res[0].text).toBe(text);
				done();
			}).catch((e)=>done(e));
				
		})
	})
	it("should not create todo with invalid data",(done)=>{
		request(app).post("/todo").send({}).expect(400).end((err,res)=>{
			if(err){
				return done(err);
			}
			todo.find().then((res)=>{
				expect(res.length).toBe(0);
				done();
			}).catch((e)=>done(e));
		})
	})
})