import React from 'react';
import pet from './turtle.jpg';
import './App.css';
import Form from './components/formName'
function App() {
  return (
    <div className="App">
      <header className="Nome do Pet">
        <img src={pet} className="App-logo" alt="logo" />
      </header>

      <Form/>
    </div>
  );
}

export default App;
