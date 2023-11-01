import * as dotenv from 'dotenv' 
dotenv.config();
import  express  from "express";
import cors from 'cors';
import mongoose from "mongoose";
import messageController from "./controllers/message.js";

const app = express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

const conf = () => {
    mongoose.connect(process.env.MONGOOSE_CONNECTION_LINK);
    const db= mongoose.connection;
    db.on('error',console.error.bind('Unable to connect to the database'));
    db.once("open",function calback(){
        console.log("Connection has been established successfully!!");
    })
  }
  conf()

app.get("/", (req,res)=> res.send("hello world"));
app.post("/send-email",messageController.sendMsg)

app.listen(3009,()=>console.log('server started on port 3009'))