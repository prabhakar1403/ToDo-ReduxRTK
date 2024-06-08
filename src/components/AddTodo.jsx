import React, {useEffect, useState} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, editTodo, updateTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    let flag = true
    const addTodoHandler = (e) => {
        e.preventDefault()
        const words = input.split(' ');
        for (let i = 0; i < words.length; i++) {
          if (words[i].length > 16) {
            flag = false;
           } }
        if(input !== '' && flag != false){
            console.log(input)
            toast.success(input + ' added successfully!!', {
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        dispatch(addTodo(input))
        setInput('')}
        else if(input == ''){
            toast.error('Enter your Todo detail before adding', {
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if(flag == false){
            toast.info('Please enter genuine todo', {
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const [editable, setEditable] = useState('');
    const [editText, setEditText] = useState('');
    let initialTodo= '';
    const editTodoHandler = (e) => {
        e.preventDefault()
        if(editText !== ''){
            toast.success(input + ' edited to ' + editText + ' successfully!!', {
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              setInput('')
              setEditable('');
              setEditText('');
              dispatch(editTodo({
                id: editable,
                text: editText,
              }))}
        else{
            toast.error('Enter your Todo detail before adding', {
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }
    }

    useEffect(() => {    
        todos.map((todo) => {
        if(todo.edit === true){
            setInput(todo.text);
            setEditText(todo.text)
            setEditable(todo.id);
        }
    })}, [todos])


    if(editable){
        return (
            <form onSubmit={editTodoHandler} className="space-x-3 mt-12">
            <input
              type="text"
              className="bg-gray-800 mb-5 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter a Todo..."
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button
              type="submit"
              className="text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Edit Todo
            </button>
            <ToastContainer />
          </form>
        )
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 mb-5 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
      <ToastContainer />
    </form>
  )
}

export default AddTodo