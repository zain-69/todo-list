"use client"
import React, { useState } from 'react'

const page = () => {
  const [tittle, settittle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandeler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { tittle, desc }]);
    settittle("")
    setdesc("")
    console.log(mainTask)
  };
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }
  let renderTask = <h2>No task Available here</h2>
  if (mainTask.length>0) {
    renderTask = mainTask.map((p,i)=>{
      return(
        
        <li className='flex items-center justify-between mb-6'>
        <div className='flex item-center justify-between w-2/3'>
          <h1 className='text-2xl font-semibold'>{p.tittle}</h1>
          <h4 className='text-xl font-semibold'>{p.desc}</h4>
        </div>
        <button
        onClick={()=>{
          deleteHandler(i)
        }}
         className='bg-red-400 text-white rounded p-2'>Delete</button>
        </li>
        
      );
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-10 text-center text-3xl font-bold'>Zain's Todo List</h1>
      <form onSubmit={submitHandeler}>
        <input className='text-2xl border-black border-4 m-8 rounded px-4 py-2'
          placeholder='Enter Task here'
          value={tittle}
          onChange={(val) => {
            settittle(val.target.value)
          }}
        />
        <input className='text-2xl border-black border-4 m-8 rounded px-4 py-2'
          placeholder='Enter Description here'
          value={desc}
          onChange={(val) => {
            setdesc(val.target.value)
          }}
        />
        <button className='bg-black text-slate-50 px-6 py-4 rounded m-8'>Add Task</button>
      </form>

      <hr />
      <div className='bg-slate-200 p-10'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page