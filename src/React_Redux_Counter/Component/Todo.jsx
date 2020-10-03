import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addTodo, deleteTodo, ToggleTask } from './actions'
import Total from './Total'
import style from './todo.module.css'
// import connect from './connect'

export class Todo extends Component {
      constructor(props){
        super(props)
        this.state={
            value: ""
        }
    }

    render() {
        const { todo, addTodo, deleteTodo, ToggleTask } = this.props
        console.log(todo)
        return (
            <div style={{
              border:"2px solid black",margin:"8%",background:"grey"
            }}>
                <h1>TODO</h1>
                <div style={{margin:"5%"}}>
                    <input
                    value={this.state.value}
                    onChange={(e) => this.setState({value: e.target.value})}
                    />
                    <button onClick={() => { addTodo(this.state.value) }} >ADD TODO</button>
                </div>
                <div>
                  {
                  todo.map((item) => (
                      <div className={item.status ?  style.complete : style.todo}
                       key={item.id}>
                           <div>{item.title}</div>
                            <button onClick={()=> deleteTodo(item.id) } >DELETE</button>
                            <button onClick={()=> ToggleTask(item.id) }  >TOGGLE</button>
                      </div>
                  ))
                }
                </div>
                <Total />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      todo: state.todo
    };
  };
  const mapDispatchToProps = (dispatch) => ({
    addTodo: (data) => dispatch(addTodo(data)),
    deleteTodo: (data) => dispatch(deleteTodo(data)),
    ToggleTask: (data) => dispatch(ToggleTask(data))
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Todo);
  



