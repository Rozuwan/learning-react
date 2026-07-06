import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(20)
  function changeVal() {
    setNum(50)
  }
  return (
    <div>
      <h1>The value of num is {num}</h1>
      <button onClick={changeVal}>Click</button>
    </div>
  )
}

export default App
