import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let todo = {
                id: nanoid(), 
                text: action.payload,
                edit: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

        /* edits ka changes are done from here and in line export todoSlice.actions*/
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>{
                return todo.id === action.payload ? { ...todo, edit: true } : todo
            })
        },
        editTodo: (state, action) => {
            const {id, text} = action.payload
            state.todos = state.todos.map((todo) =>{
                return todo.id === id ? { ...todo, text, edit: false } : todo
            })
        },
    }
})

export const {addTodo, removeTodo, updateTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer