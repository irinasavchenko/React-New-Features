import React, { useState, useEffect } from 'react';  //do request when dom-tree get ready
import './App.css';
import ToDoList from './ToDo/ToDoList';
import Context from './context';
//import AddToDo from './ToDo/AddToDo';
import Loader from './loader';
import Modal from './Modal/Modal';

//const AddToDo = React.lazy(() => import('./ToDo/AddToDo'));  //подгружаем компонент динамически
/*   {
        id: 1, completed: false, 'title': 'Buy some bread'
      },
      {
        id: 2, completed: false, 'title': 'Buy some sugar'
      },
      {
        id: 3, completed: false, 'title': 'Buy some milk'
      }*/

const AddToDo = React.lazy(() => new Promise(resovle => {
  setTimeout(() =>{
    resovle(import('./ToDo/AddToDo'))
  }, 2000)
}));

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 5000)
      })
    },[])

  function toggleItem(id) {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }

  function removeItem(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addItem(title) {
    setTodos(todos.concat([{
      id: Date.now(),
      completed: false,
      'title': title
    }]));
  }

  return (
    <Context.Provider value={{ removeItem }}>
      <div className="App">
        <h1> Hello React!!</h1>
        <Modal></Modal>
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddToDo onCreateItem={ addItem }/>
        </React.Suspense>

        { loading && <Loader></Loader> }
        { todos.length  ? <ToDoList todos={ todos } onToggle={toggleItem}></ToDoList> : (loading ? null : <p>Nothing to do</p> )}
      </div>
    </Context.Provider>
  );
}

export default App;
