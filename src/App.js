import React from 'react';
import './App.css';
import {createStore} from 'redux'
import MainCounter from './Counter_Redux/mainCounter'

function App() {
  return (
    <div className="App">
      <MainCounter/>
    </div>
  );
}

export default App;
