import { Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { FaTrashAlt } from "react-icons/fa";
import { TfiPencilAlt } from "react-icons/tfi";
import { AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";


const TodoList = ({ data, onDelete, onCompelet }) => {
    return (
        <section className="w-full flex items-center justify-center">
            <div className="bg-white  w-full max-w-screen-md p-2 md:p-4 rounded-xl">
                {data.map((todo) => {
                    return (
                        <div
                            key={todo._id}
                            className=" flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl "
                        >
                            <Link href={`/todos/${todo._id}`}>
                                <h2
                                    className={
                                        !todo.isCompleted
                                            ? `${inter.className} mb-3 text-2xl font-semibold`
                                            : "mb-3 text-2xl font-normal line-through "
                                    }
                                >
                                    {todo.title}
                                </h2>
                            </Link>

                            <div className=" flex  gap-x-3 ">
                                <button onClick={() => onCompelet(todo._id)}>
                                    {todo.isCompleted ? (
                                        <span className="w-6 h-6 block border-2 border-gray-600 rounded-full"></span>
                                    ) : (
                                        <AiOutlineCheck className="w-6 h-6 text-green-400" />
                                    )}{" "}
                                </button>
                                <button onClick={() => onDelete(todo)}>
                                    {" "}
                                    <FaTrashAlt className="w-6 h-6 text-red-400" />
                                </button>
                                <Link href={`/todos/edit/${todo._id}`}>
                                    <TfiPencilAlt className="w-6 h-6 text-blue-400" />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TodoList;
