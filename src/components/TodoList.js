import React from 'react'
import {AiFillCheckSquare} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'
import {ImCheckboxUnchecked} from 'react-icons/im'

const TodoList = ({todoList, setTodoList,setEditTodo,editTodo}) => {
  
const handleComplete=(data)=>{
 
setTodoList(todoList.map((item)=>{
  if(item.id===data.id){
    return{...item,completed:!item.completed}
   
  }
  console.log(item.completed);
  return item
}))
}
const handleEdit=({id})=>{
  const find=todoList.find((data)=>data.id===id);
  setEditTodo(find)

}
const handleDelete=({id})=>{
    console.log(id);
let filteredList=todoList.filter((data)=>{
  return (
    data.id !== id
  )
})
console.log(filteredList);
setTodoList(filteredList)
}
const deleteDone=()=>{
  const filteredDelete=todoList.map((data)=>{
    if(data.completed===false){
   return data
    }
  });
  console.log(filteredDelete);
  const deleteContent=filteredDelete.map((data)=>{
    return(
      data!==undefined
    )
  })
  console.log(deleteContent);
}

const deleteAll=()=>{
setTodoList([])
}
  return (
    <>
    <div className='todoList'>
        <h3>TodoList</h3>
        <div className='filters-button'>
            <button className='all btn btn-submit'>All</button>
            <button className='done btn btn-submit'>Done</button>
            <button className='todo btn btn-submit'>Todo</button>
        </div>
       <ul>
      {todoList.map((data,index)=>{
        return(
            <li key={index}>
            <div className='todo-component'>
              <h5 className={`todoList ${data.completed?"completed":""}` }>{data.title}</h5>
                <div className='react-icons'>
                <span className='complete-icon' onClick={()=>handleComplete(data)}>
                {data.completed?<AiFillCheckSquare/>:<ImCheckboxUnchecked/>}
                </span>
                    <span className='edit-icon' onClick={()=>{handleEdit(data)}} ><AiFillEdit/></span>
                    <span className='delete-icon' onClick={()=>handleDelete(data)}><BsFillTrashFill/></span>
                </div>
            </div>
         </li>
        )
      })}
        
       </ul>
       <div className='delete-button'>
            <button className='delete-done btn btn-submit' onClick={deleteDone}>Delete Done Tasks</button>
            <button className='delete-all btn btn-submit' onClick={deleteAll}>Delete All Tasks</button>
           
        </div>
    </div>
    </>
  )
}

export default TodoList