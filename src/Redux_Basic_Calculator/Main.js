import React from "react";
import { store } from './Redux_comps/store'
import { decrementCounter, incrementCounter } from './Redux_comps/actions'


export default class Main extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div style={{border:"2px solid black", padding:"10px", width:"20%", margin:"5%"}}>
        <h1>Counter</h1>
        <h2>{store.getState().counter}</h2>
        <button onClick={() => store.dispatch(incrementCounter(1))}>ADD</button>
        <button onClick={() => store.dispatch(decrementCounter(1))}>
          REDUCE
        </button>
      </div>
    );
  }
}
