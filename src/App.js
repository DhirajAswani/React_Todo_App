import React, {useState, useEffect} from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads , we need to fetch data from db
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault() // this will stop refresh of page on form submit
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input])
    setInput('');
  }

  return (
    <div className="App">
      
      <h1>Todo App!</h1>
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)} />  */}
        {/* <button type="Submit" onClick={addTodo}>Add ToDo</button> */}
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="Submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
        
    </div>
  );
}

export default App;
