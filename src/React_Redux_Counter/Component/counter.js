import React from "react";
import {incrementCounter, decrementCounter } from './actions'
import connect from './connect'
import store from "./store";


const Counter = props => {
  const { incrementCounter, decrementCounter, counter} = props
  console.log(incrementCounter, decrementCounter)
  return (
    <>
      <h1>Counter</h1>
      <h2>{ counter }</h2>
      <button onClick={incrementCounter } >add</button>
      <button onClick={decrementCounter} >reduce</button>
    </>
  
  )
  
}

const mapStateToProps = state => ({
  counter : state.counter
})

const mapDispatchToProps = dispatch => ({
  incrementCounter : () => dispatch(incrementCounter(1)),
  decrementCounter : () => dispatch(decrementCounter(1))
})

//here we are exporting the invoking function which is connect
// and passing the arguments, which we are using in connect component

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

 