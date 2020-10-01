import React from 'react';
import './App.css';
// import MainCounter from './Counter_Redux/mainCounter'
// import MainCalculator from './Calculator_redux/mainCalculator'
import MainCounterReactRedux from './React_Redux_Counter/Component/counter'
import Todo from './React_Redux_Counter/Component/Todo'

function App() {
  return (
    <div className="App">
      <MainCounterReactRedux /> 
      <Todo/>
      {/* <MainCounter/> */}
      {/* <MainCalculator/> */}
    </div>
  );
}

export default App;
