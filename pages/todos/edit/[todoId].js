import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../../layout";
import { getOneTodo } from "../../api/todos/[todoId]";

const EditPage = ({ todo }) => {
    const router = useRouter();

    const [formData, setFormData] = useState(todo);
    const [checked, setChecked] = useState(todo.isCompleted);

    const inputHandler = (e) => {
        setFormData({ ...formData, [e.name]: e.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
         formData.isCompleted=checked
        axios.put(`/api/todos/${todo._id}`, formData).then((res) => {
            router.push("/todos");
        });
    };
    
    return (
        <Layout>
          

            <div className="flex justify-center items-center">
                <form
                    onSubmit={submitHandler}
                    className="max-w-md bg-white  w-full p-2 md:p-4 rounded-xl"
                >
                    <div className="mb-4 w-full">
                        <label className="mb-1 text-gray-600 block" htmlFor="todoTitle">
                            Title
                        </label>
                        <input
                            name="title"
                            value={formData.title}
                            id="todoTitle"
                            type="text"
                            placeholder="todo title ..."
                            onChange={(e) => inputHandler(e.target)}
                            className="border w-full border-gray-400 px-3 py-2 rounded-lg outLine-none focus:outline-none
                        focus:ring-blue-400 focus:ring-2 focus:border-none block transition duration-300 ease-out"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="mb-1 text-gray-600 block" htmlFor="discriptionTodo">
                            Description
                        </label>
                        <textarea
                            value={formData.description}
                            name="description"
                            id="discriptionTodo"
                            onChange={(e) => inputHandler(e.target)}
                            className="border  border-gray-400 w-full px-3 py-2 rounded-lg outLine-none focus:outline-none focus:ring-blue-400
                        focus:ring-2 focus:border-none block transition duration-300 ease-out"
                        />
                    </div>
                    <div className="flex gap-3 mb-4">
                        <input
                            id="isCompletedTodo"
                            onChange={() => setChecked(!checked)}
                            type="checkbox"
                            checked={checked}
                        />
                        <label htmlFor="isCompletedTodo" className="mb-1 text-gray-600 block">
                            isCompleted
                        </label>
                    </div>
                    <div className="flex items-center gap-x-4  ">
                        <Link
                            href="/todos"
                            className="w-full text-blue-500 border text-center border-blue-500 rounded-lg px-8 py-2 hover:border-blue-600 transition-all duration-300 ease-in-out"
                        >
                            Back
                        </Link>
                        <button
                            className={
                                "w-full font-bold  bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                            }
                        >
                            Update todo
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default EditPage;

export async function getServerSideProps(context) {
    const { query } = context;
    const todo = await getOneTodo(query);
    return {
        props: {
            todo: JSON.parse(JSON.stringify(todo)),
        },
    };
}
