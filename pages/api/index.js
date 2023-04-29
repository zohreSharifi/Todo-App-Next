import {todos} from "../../data/todos"
require('dotenv').config()
export default function handler(req, res) {
    console.log(typeof(process.env.MONG0_URI),"...........env")
    return res.status(200).json({todos });
}
