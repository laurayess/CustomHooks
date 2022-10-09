import React from 'react'
import { todoReducer } from '../08-useReducer/todoReucer'
import { useEffect } from 'react'
import { useReducer } from 'react'

const init=()=>{
    return JSON.parse(localStorage.getItem('todos'))||[]
}

const initialState=[ ]

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState,init)
    let allTodos=todos.length;
    useEffect(() => {
       localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo=(todo)=>{
        const action={
            type:'[TODO] Add todo',
            payload:todo
        }
        dispatch(action)
    }

    const handleDelete=(id)=>{
        dispatch({
            type:'[TODO] Remove todo',
            payload:id
        })
    }

    const handleToogleTodo=(id)=>{
        dispatch({
            type:'[TODO] Toggle todo',
            payload:id
        })
    }

    const pendientes=()=> (todos.filter(todos=>!todos.done).length)

    
  return{
    ...todos,
    todos,
    allTodos,
    handleNewTodo,
    handleDelete,
    handleToogleTodo,
    pendientes
  }
}
