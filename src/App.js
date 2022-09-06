
import { useState,useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const initialState=JSON.parse(localStorage.getItem("todos"))||[];
  const[todo,setTodo]=useState("");
  const[todoList,setTodoList]=useState(initialState);
  const[editTodo,setEditTodo]=useState(null);
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todoList));
},[todoList])
  return (
    <div className="App">
<div className='todo-wrapper'>
  <AddTodo todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} editTodo={editTodo} setEditTodo={setEditTodo} />
<TodoList todoList={todoList} setTodoList={setTodoList} setEditTodo={setEditTodo} editTodo={editTodo}/>
</div>
    </div>
  );
}

export default App;
