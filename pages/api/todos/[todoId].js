import dbConnect from "../../../server/utils/dbConnect";
import Todo from "../../../server/models/todo";
require("dotenv").config();
export default async function handler(req, res) {
    await dbConnect();
    if (req.method === "DELETE") {
        await Todo.findByIdAndDelete(req.query.todoId);
        const todos = await Todo.find({});
        return res.status(200).json({ massage: "todo deleted !", todos });
    }
    if (req.method === "GET") {
        const todo = await getOneTodo(req.query);
        return res.status(200).json({ massage: " todo loaded  !", todo });
    }
    if (req.method === "PUT") {
        console.log(req.method,"...............req")
        const todo = await Todo.findById(req.body._id);
        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.isCompleted=req.body.isCompleted
        await todo.save();
        const todos = await Todo.find({});
        return res.status(200).json({ massage: "todo updated !", todos });
    }
    if(req.method === "POST"){
        const todo = await Todo.findById(req.body._id);
        todo.isCompleted=true
        await todo.save();
        return res.status(200).json({ massage: "todo completed !", todo });
    }
}

export const getOneTodo = async (query) => {
    const todo = await Todo.findById(query.todoId);
    return todo;
};
