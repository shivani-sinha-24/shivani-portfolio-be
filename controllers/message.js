import Message from "../model/message";

export default {
    async sendMsg () {
        try {
            let request = req.body;
            let msg = await Message.create(request);
            return res.status(200).send({ status_code: 200, message: "SEO created successfully." });
        } catch (err) {
            return res.status(400).send({ message: "Something Went Wrong!" })
        }
    }
        
}