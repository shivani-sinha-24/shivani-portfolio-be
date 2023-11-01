import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String
        },
        subject:{
            type:String
        },
        text:{
            type:String
        },
        timeofMsg:String
    }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;