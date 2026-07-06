import React from 'react'

const App = () => {
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log("submitted");
        
      }}>
        <input type="text" placeholder='Enter'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
