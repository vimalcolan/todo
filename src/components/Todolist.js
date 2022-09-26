import React from 'react'

const Todolist = ({data,handleRead,newList}) => {
  return (
    <div>
        {
            <div className='todo-wrapper d-flex w-50 ml-auto justify-content-between align-items-center'>
                <p className={'todo-name'+ newList.completed?"strike":null}>{data.name}</p>
                <div className='icons d-flex'>
                    <div className='mx-2' onClick={()=>{handleRead(data)}}>Mark as read</div>
                    <div>Delete</div>
                </div>
            </div>
        }
    </div>
  )
}

export default Todolist