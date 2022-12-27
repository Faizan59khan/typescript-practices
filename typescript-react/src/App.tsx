import React,{useState} from 'react'
import CreateNotes from './components/CreateNotes'
import Sticky from './components/Sticky'
interface Props{
  title: string,
  description: string

}

const App : React.FC<Props> = () => {
  const [title,setTitle]=useState<string>('');
  const [desc,setDesc]=useState<string>('');
  return (
    <div>
      <CreateNotes title={title} description={desc} setTitle={setTitle} setDesc={setDesc} />
      <Sticky title={title} description={desc} />
    </div>
  )
}

export default App