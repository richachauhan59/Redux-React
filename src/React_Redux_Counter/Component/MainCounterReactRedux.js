import React, { Component } from 'react'
import Counter from './counter'
import Todo from './Todo'

export class MainCounterReactRedux extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         value: ""
    //     }
    // }

    // componentDidMount(){

    // }

    render() {
        return (
            <div>
                <Counter/>
                <Todo/>
            </div>
        )
    }
}

export default MainCounterReactRedux
