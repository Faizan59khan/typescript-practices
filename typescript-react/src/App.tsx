import React,{useState} from 'react'

interface Props{
  name: string;
}

const HelloWorld: React.FC<Props>= ({name})=>{
  const [state]=useState<{fullName: string | null}>({fullName: ""});
  return <div>hello</div>
}

const App: React.FC  = () => {
  return (
    <div>App</div>
  )
}

export default App;
