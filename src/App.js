import coffeeToGo from './logo.svg';
import './App.css';
// import { Component } from 'react';
import { Title } from './components/Title/Title';
import { Counter } from './components/Counter/Counter';

const title= 'Please leave feedback';
function App() {
    return (
      <div className="App">
        <img src={coffeeToGo} className="App-logo" alt="coffeeToGo" />
        <Title value={title}/>
        <Counter/>
  </div>
  );
}

export default App;
