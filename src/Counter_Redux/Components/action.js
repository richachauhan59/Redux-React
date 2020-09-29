import ActionType from './actionTypes'

const incrementCounter = (data) =>{
    return{
        type: ActionType.Increment_Counter,
        data
    }
}

const decrementCounter = (data) =>{
    return{
        type: ActionType.Decrement_Counter,
        data
    }
}
export { incrementCounter , decrementCounter}