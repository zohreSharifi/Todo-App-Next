import dbConnect from "../../../server/utils/dbConnect";
import Todo from "../../../server/models/todo";
require('dotenv').config()
export default async function handler(req, res) {
    const { method, body } = req;
    await dbConnect();
    if (method === "POST") {
        await Todo.create({ title: req.body.title, description: req.body.description });
        const todos = await Todo.find({});
        return res.status(201).json({ message: "new todo added", todos });
    } else if (method === "GET") {
       const todos=await getAllTodos()
        return res.status(200).json({ todos });
    }
   
}

export  const getAllTodos=async()=>{
    const todos = await Todo.find({});
    return todos
}