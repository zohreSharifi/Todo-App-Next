import { useState } from "react";
const TodoForm = ({ onsubmit }) => {
    const [isShow, setIsShow] = useState(false);
    const [formData, setFormData] = useState({title:"",description:""});

    const submitHandler = (e) => {
        e.preventDefault();
        onsubmit(formData);
    };
    const inputHandler = (input) => {
        setFormData({...formData,[input.name]:input.value});
    };
    return (
        <div className="w-full">
            <button
                className={
                    !isShow
                        ? " font-bold  bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                        : "hidden"
                }
                onClick={() => setIsShow(true)}
            >
                Add new todo
            </button>
            <form
                onSubmit={submitHandler}
                className={isShow ? "max-w-md bg-white w-full p-2 md:p-4 rounded-xl" : "hidden "}
            >
                <div className="mb-4">
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
                        className="border w-full px-3 py-2 rounded-lg outLine-none focus:outline-none
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
                        className="border w-full px-3 py-2 rounded-lg outLine-none focus:outline-none focus:ring-blue-400
                        focus:ring-2 focus:border-none block transition duration-300 ease-out"
                    />
                </div>
                <div className="flex items-center gap-x-4  ">
                    <button
                        className="w-full text-blue-500 border border-blue-500 rounded-lg px-8 py-2 hover:border-blue-600 transition-all duration-300 ease-in-out"
                        onClick={() => setIsShow(false)}
                    >
                        cancel
                    </button>
                    <button
                        className={
                            "w-full font-bold  bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                        }
                    >
                        Add new todo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;
