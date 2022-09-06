import React, { useEffect } from 'react'
import { v4 } from 'uuid';


const AddTodo = ({todo,setTodo,todoList,setTodoList,editTodo,setEditTodo}) => {
    const updateTodo=(title,id,completed)=>{
        const newTodo=todoList.map((data)=>
            data.id === id?{title,id,completed}:data
        );
        setTodoList(newTodo);
        setEditTodo("")
        
    }
    useEffect(()=>{
        if(editTodo){
            setTodo(editTodo.title)
        }
        else{
            setTodo("")
        }
    },[editTodo,setTodo])
    const handleChange=(e)=>{
setTodo(e.target.value);
    }
    const handleSubmit=(e)=>{
e.preventDefault();
if(!editTodo&&todo!==""){
setTodoList([...todoList,{id:v4(),title:todo,completed:false}]);
setTodo("")
}
else{
    updateTodo(todo,editTodo.id,editTodo.completed)
}

    }
  return (
    <div className='add-todo'>
        <h3>Todo Input</h3>
        <form onSubmit={handleSubmit}>
            <div className='custom-input'>
                <span></span>
                <input type="text" onChange={handleChange} name="todo" value={todo} />
            </div>
            <button type='submit' className='btn btn-submit'>{editTodo?"Update Task":"Add New Task"}</button>
        </form>
    </div>
  )
}

export default AddTodo