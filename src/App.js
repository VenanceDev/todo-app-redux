import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      <header>React-Redux-Todo-App</header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
