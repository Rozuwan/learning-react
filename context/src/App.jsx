import { useState } from "react"
import Navbar from "./Component/Navbar"

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}/>
    </div>
  )
}

export default App
