import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'
import { FaTrash } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const handleUpdateTodo = (id) => {
        console.log("fn was called")
        dispatch(updateTodo(id));        
      };
    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));        
      };
  return (
    <>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          > 
            <div className='text-white pr-5'>
                <h1 className='text-left'>{todo.text}</h1>
            </div>
            <div className='flex items-center'>
            <button
             onClick={() => handleUpdateTodo(todo.id)}
              className="mr-2 text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"
            >
                <FaPenToSquare />
            </button>
            <button
             onClick={() => handleRemoveTodo(todo.id)}
              className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"
            >
                <FaTrash />
            </button>   
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos