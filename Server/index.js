const cors=require('cors')
const express=require('express')
const mongoose=require('mongoose')
const Centers=require('./models/centers')

const app=express()
app.use(cors())
var bodyParser = require('body-parser');
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: false
 }))

 mongoose.connect("mongodb://127.0.0.1:27017/Centers",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connected to db")})
.catch(console.error)

app.get('/Centers',(req,res)=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Centers', function (err, db) {
    if (err) throw err;

    var coll = db.collection('centers');

    coll.find({}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {

            res.send(result);
        }
    })

});
})

app.post('/Centers',(req,res)=>{
    const {name,location,doses}=req.body

    const center=new Centers({name,location,doses})
    center.save(err=>{
        if(err){
            res.send(err)
        }
        else{
            res.send({message:"Successful"})
        }
    }) 
})

app.listen(8080,()=>{console.log("listening on port 8080")})
