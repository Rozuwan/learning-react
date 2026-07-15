import { useContext } from "react"
import { DataContext } from "../context/UserContext"

const Header = () => {
   const name = useContext(DataContext)
  return (
    <div>
      <h1>Header{name}</h1>
    </div>
  )
}

export default Header
