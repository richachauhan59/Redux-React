import {Increment_Counter, Decrement_Counter, Add_Todo, Del_Todo, Toggle_Todo  } from './actionTypes'

export const initialState = {counter : 0 , total:0 , completed : 0 ,  todo : []}

const reducer = (state = initialState , action) => {
    let { type, data } = action
    switch(type){

        case Increment_Counter:
            return{
                ...state,
                counter: state.counter + data
            }

        case Decrement_Counter:
            return{
                ...state,
                counter: state.counter - data
            }  

        case Add_Todo:
            return{
                ...state,
                todo:[...state.todo , data],
                total: state.total + 1
            }

        case Del_Todo:{
            let comp = 0;
            let todo_temp = state.todo.filter((item) => {
                if(item.id != data){
                    if(item.status){
                        comp++
                    }
                    return item
                }
            });
            return {
                ...state,
                todo : todo_temp,
                total: state.total -1,
                completed : comp
            };
           }
        case Toggle_Todo:
            let temp = 0;
            let todo = state.todo.map((item) => {
                if(item.id == data){
                    item.status = !item.status;
                }
                if(item.status){
                    temp++
                }
                return item
            })
            return {
                ...state,
                todo : todo,
                completed : temp
            }
        default:
            return state     
    }
}

export default reducer

