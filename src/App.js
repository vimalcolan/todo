import { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  const[todo,setTodo]=useState("");
  const[todoList,setTodoList]=useState([]);
  const handleChange=(e)=>{
    setTodo(e.target.value);
  }
  const addTodo=(e)=>{
    e.preventDefault();
    setTodoList([...todoList,{name:todo,completed:false}]);
    console.log(todoList);
    setTodo("")
  }
  const handleRead=(data)=>{
  let newList=  todoList.map((read)=>{
      if(read.name === data.name){
        return{...read,completed:!read.completed}
      }
      return read;
    });
    console.log(newList);
  }
  
  return (
    <div className="App">
      <div className='todo-form'>
        <h1>Todo list</h1>
        <div className='todo-form'>
          <form onSubmit={addTodo}>
            <input type="text" onChange={handleChange} placeholder="Enter todo" value={todo}/>
            <button type="submit" value="Add Todo" className='btn btn-primary' >ADD Todo</button>
          </form>
        </div>
      </div>
     {
      todoList.map((data,index)=>{
        return(
          <Todolist key={index} data={data} handleRead={handleRead} newList={newList}/>
        )
      })
     }
    </div>
  );
}

export default App;
