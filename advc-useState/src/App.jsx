import  { useState } from 'react'

const App = () => {
  const [user, setuser] = useState({name:"ram",age:18})
  function change (){
    const newName = {...user}
    newName.name ="shyam"
    newName.age=20
    setuser(newName)
  }
  return (
    <div>
      <h1>{user.name}{user.age}</h1>
        <button onClick={change}>Click</button>
    </div>
  )
}

export default App
