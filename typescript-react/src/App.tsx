import React,{useEffect, useState} from 'react'
import CreateNotes from './components/CreateNotes'
import Sticky from './components/Sticky'
interface Props{
  id: Number
  title: string,
  description: string
  fetchStickyNotes: Function
}

const App : React.FC<Props> = () => {
  const [title,setTitle]=useState<string>('');
  const [desc,setDesc]=useState<string>('');
  const [data,setData]=useState<any>();

  const fetchStickyNotes= async ()=>{
    let url="http://localhost:3001/stickyNotes"
    
    try{
    const data= await (await fetch(url)).json();
     console.log(data)
     setData(data)
    }
    catch(err){
     console.log(err)
    }
 }

  useEffect(()=>{
    fetchStickyNotes();
  },[])

  return (
    <div>
      <CreateNotes title={title} description={desc} setTitle={setTitle} setDesc={setDesc} fetchStickyNotes={fetchStickyNotes}/>
      <Sticky data={data} setData={setData} fetchStickyNotes={fetchStickyNotes} />
    </div>
  )
}

export default App