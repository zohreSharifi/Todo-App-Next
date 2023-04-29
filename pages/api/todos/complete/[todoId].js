import Todo from "../../../../server/models/todo";
import dbConnect from "../../../../server/utils/dbConnect";
dbConnect();
export default async function handler(req, res) {
    if (req.method === "PUT") {
        const todo = await Todo.findById(req.query.todoId);
        todo.isCompleted = !todo.isCompleted;
        await todo.save();
        const todos = await Todo.find({});
        return res.status(200).json({ massage: "todo completed !", todos });
    }
    
}
