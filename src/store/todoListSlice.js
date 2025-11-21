import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo List",
    initialState: {
        todos: JSON.parse(localStorage.getItem("todos")) || []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [action.payload, ...state.todos]

            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id == action.payload.id ? {
                ...todo,
                title: action.payload.title
            } : todo)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {
                ...todo, checked: !todo.checked
            } : todo)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        }
    }
})

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
