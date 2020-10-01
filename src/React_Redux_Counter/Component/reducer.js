import {Increment_Counter, Decrement_Counter, Add_Todo, Del_Todo  } from './actionTypes'

export const initialState = {counter : 0 , todo : []}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case Increment_Counter:
            return{
                ...state,
                counter: state.counter + action.data
            }
        case Decrement_Counter:
            return{
                ...state,
                counter: state.counter - action.data
            }  
        case Add_Todo:
            return{
                todo:[...state.todo , action.data]
            }
        case Del_Todo:
            return{
                todo: state.todo.filter(item => item.id !== action.data)
            }
        default:
            return state     
    }
}

export default reducer


  