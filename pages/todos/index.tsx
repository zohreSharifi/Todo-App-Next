import useSWR from "swr"
import axios from 'axios';
import { useEffect, useState } from 'react';
import TodoForm from "../../components/todos/addNewTodo.js"
import TodoList from "../../components/todos/todoList"
import {getAllTodos} from "../api/todos/index"
import Layout from "../../layout"

export default function Home({todos}) {

  const [data,setData]=useState(todos)
  const deleteTodoHandler=(todo)=>{
  axios.delete(`api/todos/${todo._id}`)
  .then(res=>{
    console.log(res.data)
    setData(res.data.todos)

  })
  .catch(error=>console.log(error))
  
   }

  const addTodoHandler=(inputValue)=>{
  axios.post('api/todos',{title:inputValue.title,description:inputValue.description})
  .then(res=>setData(res.data.todos))
  }

  const completeHandler = async (id) => {
  await axios.put(`/api/todos/complete/${id}`)
  .then((res) => setData(res.data.todos));
  }  ;
 
  return (
   <Layout>
     <main >
     
     <div className="container mx-auto p-2 xl:max-w-screen-xl">
         <section className='flex gap-x-8 gap-y-8 flex-col md:flex-row md:items-start md:justify-center '>
        <TodoForm onsubmit={addTodoHandler} />
        <TodoList data={data} onDelete={deleteTodoHandler} onCompelet={completeHandler}/>
         </section>
    </div>
     </main>
   </Layout>
  )
}


export async function getServerSideProps(){
const todos=await getAllTodos()


  return{
    props:{
      todos:JSON.parse(JSON.stringify(todos))
    }
  }
}