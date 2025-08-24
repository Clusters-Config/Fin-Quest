import { AsyncHandler } from "../utils/AsyncHandler.js";
import { Apierror } from "../utils/Apierror.js";
import CommunitychatSchema from "../models/community.js";
import { SignupSchema } from "../models/signup.js";

const sendmessage = AsyncHandler(async (req, res) => {
    const { user, receiver, message } = req.body;
    console.log(user, receiver, message)
    const newmessage = new CommunitychatSchema({
        sender: user,
        receiver: receiver,
        message:message
    })
    await newmessage.save()

    res.send(newmessage)
})

const getmessages = AsyncHandler(async (req, res) => {
    const { user, receiver } = req.body;
    // console.log(user, receiver, message)
    const messages = await CommunitychatSchema.find({
        $or: [
            { sender: user, receiver: receiver },
            { sender: receiver, receiver: user }
        ]
    })
    // console.log(messages[0])

    res.send(messages)
})

const getusers = AsyncHandler(async (req, res) => {
    const users = await SignupSchema.find({});
    res.send(users)
})



export { sendmessage , getmessages, getusers};