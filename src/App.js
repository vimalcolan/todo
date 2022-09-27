import { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  const[todo,setTodo]=useState("");
  const[todoList,setTodoList]=useState([]);
  const[editId,setEditId]=useState("");

  // ---------------------Tracking changes in input field------------------------
  const handleChange=(e)=>{
    setTodo(e.target.value);
  }
   // ---------------------submitting value(both edit and add)------------------------
  const addTodo=(e)=>{
      e.preventDefault();
      if(editId){
        const editTodo=todoList.find((i)=>{return(i.name===editId)});
        const updateTodo=todoList.map((t)=>
            t.name==editTodo.name?(t={name:todo,completed:false}):{name:t.name,completed:false}
        );
        setTodoList(updateTodo);
        setEditId("");
        setTodo("");
        return;
      }
    if(todo!==""){
      setTodoList([...todoList,{name:todo,completed:false}]);
      console.log(todoList);
      setTodo("");
   }
  }
   // ---------------------Handling done or not------------------------
  const handleRead=(data)=>{
  let newList=  todoList.map((read)=>{
      if(read.name === data.name){
        return{...read,completed:!read.completed}
      }
      return read;
    });
    console.log(newList);
  }
   // ---------------------Handling delete------------------------
  const handleDelete=(data)=>{
   let remainingList=todoList.filter((e)=>{
   return( e.name!=data.name)
  });
   setTodoList(remainingList)
    }
     // ---------------------handling edit------------------------
    const handleEdit=(data)=>{
      let editItem=todoList.find((e)=>{
      return( e.name==data.name)
     });
      setTodo(editItem.name);
      setEditId(editItem.name);

       }

  return (
    <div className="App">
      <div className='todo-form'>
        <h1>Todo list</h1>
        <div className='todo-form'>
          <form onSubmit={addTodo}>
            <input type="text" onChange={handleChange} placeholder="Enter todo" value={todo}/>
            <button type="submit" value="Add Todo" className='btn btn-primary' >{editId?"Update todo":"Add Todo"}</button>
          </form>
        </div>
      </div>
     {
      todoList.map((data,index)=>{
        return(
          <Todolist key={index} data={data} handleRead={handleRead} handleDelete={handleDelete} handleEdit={handleEdit}/>
        )
      })
     }
    </div>
  );
}

export default App;
