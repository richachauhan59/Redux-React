// import { INCREMENT , DECREMENT , MULTIPLY , DIVISION } from './actionType'
import actionConstants from './actionType'

const initState = { counter : 0 }
let count = 0

const reducer = ( state = initState , action) =>{
    console.log(count++)
    switch(action.type){
        case actionConstants.INCREMENT:
            return{
                ...state,
                counter: state.counter + (action.data)
            }
        case actionConstants.DECREMENT:
            return{
                ...state,
                counter:state.counter - (action.data)
            }
        case actionConstants.MULTIPLY:
            return{
                ...state,
                counter:state.counter * (action.data)
            }
        case actionConstants.DIVISION:
            return{
                ...state,
                counter:state.counter / (action.data)
            }
        default:
            return state
    }
}
export {reducer}