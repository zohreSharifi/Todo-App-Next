import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { getOneTodo } from "../api/todos/[todoId]";


const TodoPage = ({todo}) => {
 

    return (  
       <div className="min-h-screen  bg-gray-50 flex flex-col ">
         <nav className='bg-white  w-full shadow-sm flex items-center justify-center mb-6 py-4'>
       <h1 className= 'font-bold'>
          Todo List App using Next.js & TailwindCSS
        </h1>
       </nav>
        <div className="container mx-auto xl:max-w-screen-xl  ">
        <h1 className="bg-white font-semibold text-center py-3"> this is  {todo.title} detail  page ...</h1>
        </div>
       </div>
    );
}
export default TodoPage
 

export async function getServerSideProps(context){
const {query}=context
const todo=await getOneTodo(query)

    return{
        props:{
            todo:JSON.parse(JSON.stringify(todo))

        }
    }
}
