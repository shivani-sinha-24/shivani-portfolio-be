import  express  from "express";
import cors from 'cors';
import message from "./controllers/message";

const app = express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res)=> res.send("hello world"));
app.post("/send-email",message.sendMsg)

app.listen(3009,()=>console.log('server started on port 3009'))