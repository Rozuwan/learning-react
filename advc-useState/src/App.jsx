import React, { useState } from 'react'

const App = () => {
  const [user, setuser] = useState({name:"ram",age:20})
  function change() {
    setuser(prev=>({...prev,age:30,name:"shyam"}))
  }
  return (
    <div>
      <h1>{user.name}, {user.age}</h1>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default App
