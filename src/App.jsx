import { useState } from "react"
import Canvas from "./components/Canvas"
import Toolkit from "./components/Toolkit"

const App = () => {
  const [activeTool, setActiveTool] = useState('default')
  return (
    <div>
      <Canvas activeTool={activeTool}/>
      <Toolkit activeTool={activeTool} setActiveTool={setActiveTool}/>
    </div>
  )
}

export default App