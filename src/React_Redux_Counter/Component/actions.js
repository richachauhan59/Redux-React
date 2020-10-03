import {Increment_Counter, Decrement_Counter, Add_Todo, Del_Todo, Toggle_Todo  } from './actionTypes'
import { v4 as uuid } from 'uuid'

export const incrementCounter = (data) =>{
    return{
        type: Increment_Counter,
        data
    }
}

export const decrementCounter = (data) =>{
    return{
        type: Decrement_Counter,
        data
    }
}

export const addTodo = (data) => {
    return{
        type: Add_Todo,
        data:{
            id: uuid(),
            title: data,
            status: false
        }
    }
}
export const deleteTodo = (data) => {
    return{
        type : Del_Todo,
        data
    }
    
}
export const ToggleTask = (data) => {
    return{
        type : Toggle_Todo,
        data 
    }
    
}
