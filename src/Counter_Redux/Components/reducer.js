import ActionTypes from './actionTypes'

const initialState = {counter : 0}
let count = 0

const reducer = (state = initialState , action) => {
    switch(action.type){
        case ActionTypes.Increment_Counter:
            return{
                ...state,
                counter: state.counter + action.data
            }
        case ActionTypes.Decrement_Counter:
            return{
                ...state,
                counter: state.counter - action.data
            }   
        default:
            return state     
    }
}

export {reducer}