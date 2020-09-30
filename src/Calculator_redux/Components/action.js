// import  { INCREMENT , DECREMENT ,MULTIPLY ,DIVISION } from './actionType'
import actionConstants from './actionType'


const increment = (data) =>{
    return{
        type: actionConstants.INCREMENT,
        data
    }
}
const decrement = (data) =>{
    return{
        type: actionConstants.DECREMENT,
        data
    }
}
const multiply = (data) =>{
    return{
        type: actionConstants.MULTIPLY,
        data
    }
}
const division = (data) =>{
    return{
        type: actionConstants.DIVISION,
        data
    }
}

export {increment, decrement, multiply, division}