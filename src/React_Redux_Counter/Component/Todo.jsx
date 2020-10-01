import React, { Component } from 'react'

export class Todo extends Component {
      constructor(props){
        super(props)
        this.state={
            value: ""
        }
    }


    render() {
        return (
            <div>
                <div>
                    <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    />
                    <br/>
                    <button onClick={() => {}} >ADD TODO</button>
                </div>
            </div>
        )
    }
}

export default Todo
