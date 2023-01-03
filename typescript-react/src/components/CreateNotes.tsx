import React, { useState, useId, useEffect } from 'react'
import axios from 'axios'



interface Props{
  title: string
  description: string
  setTitle: Function
  setDesc: Function
  fetchStickyNotes: Function
}

const CreateNotes : React.FC<Props> = ({title,description,setTitle,setDesc,fetchStickyNotes}) => {

  const addNotes=async (id: Function)=>{
    let url="http://localhost:3001/stickyNotes";
    axios.post(url,{
      id: id,
      title,
      description
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err);
    })

    fetchStickyNotes();
  }

  return (
    <div style={{textAlign: 'center', padding:"10px"}}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '80%',
        border: '1px solid #006633',
        padding: '1rem',
        margin: '0 auto',
        borderRadius: '5px',
      }}>
      <label style={{display: 'flex',flexDirection: 'column'}}>
        <span style={{width: '100px', color: '#006633',fontSize: '20px'}}>Title</span>
        <input type="text" style={{
        margin: '10px',
        maxWidth: '80%',
        height: '30px',
        borderRadius: '5px'
      }} placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)}/>
      </label>
      <label style={{display: 'flex', flexDirection: 'column'}}>
        <span style={{width: '100px', color: '#006633', fontSize: '20px'}}>Description</span>
      <textarea style={{
        margin: '10px',
        maxWidth: '90%',
        height: '30px',
        borderRadius: '5px'
      }} placeholder='Enter Description' onChange={(e)=>setDesc(e.target.value)}/>
      </label>
      </div>

      <button style={{background: '#006633', width: '150px', height: '50px', borderRadius: '5px', color: '#ffff', margin:'10px'}} onClick={() => addNotes(useId)}>Create Notes</button>
    </div>
  )
}

export default CreateNotes