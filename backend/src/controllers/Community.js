import { AsyncHandler } from "../utils/AsyncHandler.js";
import { Apierror } from "../utils/Apierror.js";
import CommunitychatSchema from "../models/community.js";
import { SignupSchema } from "../models/signup.js";
import connectionSchema from "../models/Connections.js";

const sendmessage = AsyncHandler(async (req, res) => {
    const { user, receiver, message } = req.body;
    // console.log(user, receiver, message)
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


const addconnection = AsyncHandler(async (req, res) => {
    const { user, connector } = req.body;
    const newconnection = new connectionSchema({
        user: user,
        connection:connector
    })
    await newconnection.save()
    res.send(newconnection)
})

const getconnections = AsyncHandler(async (req, res) => {
    const { user } = req.body;
    // console.log
    const connextions = await connectionSchema.find({
        $or: [
            { user: user },
            { connection : user}
        ]
    });

    let conn = [];

    for (let i = 0; i < connextions.length; i++){
        conn.push(connextions[i].connection),
            conn.push(connextions[i].user)
    }

    // console.log(conn)

    // console.log(connextions)
    res.send(conn)
})


export { sendmessage , getmessages, getusers, addconnection, getconnections};