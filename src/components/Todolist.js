import React from 'react'

const Todolist = ({data,handleRead,handleDelete,handleEdit}) => {
  return (
    <div>
        {
            <div className='todo-wrapper d-flex w-50 ml-auto justify-content-between align-items-center'>
                <p className={`todo-name`}>{data.name}</p>
                <div className='icons d-flex'>
                  <div onClick={()=>{handleEdit(data)}}>Edit</div>
                    <div className='mx-2' onClick={()=>{handleRead(data)}}>Mark as read</div>
                    <div onClick={()=>{handleDelete(data)}}>Delete</div>
                </div>
            </div>
        }
    </div>
  )
}

export default Todolist