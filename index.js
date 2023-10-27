import  express  from "express";
import cors from 'cors';

const app = express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res)=> res.send("hello world"));
app.post("/send-email",(req,res)=>{
    console.log("object 1111111111111111111", req.body.email)
    res.status(200).send({message:"Email sent successfully"})
})

app.listen(3009,()=>console.log('server started on port 3009'))