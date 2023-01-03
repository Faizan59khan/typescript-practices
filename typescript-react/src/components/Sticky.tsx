import axios from 'axios'
import React, { useCallback, useEffect, useId, useMemo, useState } from 'react'


interface NotesData{
  id: Number
  title: string,
  description: string
}
interface Props{
 data: NotesData[]
 setData: Function,
 fetchStickyNotes: Function
}

const Sticky: React.FC<Props> = ({data,setData,fetchStickyNotes}) => {


 const editNotes=(id: Number)=>{
  let url=`http://localhost:3001/stickyNotes/${id}`
  axios.get(url).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
  let title=prompt('Edit the title')
  let description=prompt('Enter the desc')

  if(title && description){
  axios.put(url,{id: useId, title: title, description: description}).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
  fetchStickyNotes()
 }
 }

 const deleteNotes=(id: Number)=>{
   let url=`http://localhost:3001/stickyNotes/${id}`
   axios.delete(url).then((res)=>{
    console.log(res)
   }).catch((err)=>{
    console.log(err)
   })
   fetchStickyNotes()
 }
 


  return (
    <div style={{display: 'flex', flexDirection: "row", flexWrap:'wrap', width: '70%', margin: '0 auto'}}>
      {
        data ? 
         data.map((notes) =>{
          return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "250px",
                  height: 'auto',
                  border: "1px solid grey",
                  borderRadius: '5px',
                  background: "#80ffbf",
                  margin: '10px',
                  padding: '5px'
                }}
              >
                <button onClick={()=>deleteNotes(notes?.id)}>Delete</button>
                <button onClick={()=>editNotes(notes?.id)}>Edit</button>
                <span style={{textAlign: 'right'}}>a minute ago</span>
                <h4>{notes?.title}</h4>
                <div style={{
                  border: '1px solid #00cc66',
                  borderRadius: '5px',
              
                }}>
                  {notes?.description}
                </div>
              </div>
          );
         }
         )
         : null
      }
    </div>
    
  )
}

export default Sticky;