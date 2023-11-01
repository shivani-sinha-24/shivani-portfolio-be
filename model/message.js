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
        message:{
            type:String
        },
        timeofMsg:String
    }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;