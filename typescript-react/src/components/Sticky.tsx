import React, { useEffect, useState } from 'react'

interface Props{
  title: string,
  description: string
}


const Sticky: React.FC<Props> = () => {
  const [data,setData]=useState<Props[]>();
  const fetchStickyNotes=async ()=>{
    let url="http://localhost:3001/stickyNotes"
    try{
    const data= await (await fetch(url)).json();
    setData(data)
    }
    catch(err){
     console.log(err)
    }
 }
 
 useEffect(()=>{
   fetchStickyNotes();
 },[data])



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