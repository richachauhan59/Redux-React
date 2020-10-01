import {Increment_Counter, Decrement_Counter, Add_Todo, Del_Todo  } from './actionTypes'

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
            id: Date.now,
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
