import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState([10,20,30,40])
  function change() {
    const newNum =[...num]
    newNum.push(99)
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default App
