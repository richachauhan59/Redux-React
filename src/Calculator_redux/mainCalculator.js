import React from 'react'
import {store } from './Components/store'
import {increment, decrement, multiply, division} from './Components/action'
import "./mainCalculator.css"

class mainCalculator extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value : ""
        }
    }

    handleChange = (e) => {
        const { value } = e.target
        this.setState({
          value: Number(value)
        })
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

   

    render() {
        const {value} = this.state
        return (
            <div style={{border:"2px solid black", padding:"10px", width:"20%", margin:"5%"}}>
               <h1>Calculator</h1> 
               <h2>{store.getState().counter}</h2> 
               <div>
                   <input placeholder="enter value..." onChange={this.handleChange} value={this.state.value} />
               </div> 
                <button onClick={(e) => store.dispatch(increment(value))}>Add</button>
                <button onClick={(e) => store.dispatch(decrement(value))}>Subtract</button>
                <button onClick={(e) => store.dispatch(multiply(value))}>Multiply</button>
                <button onClick={(e) => store.dispatch(division(value))}>Divide</button>
            </div>
        )
    }
}

export default mainCalculator


