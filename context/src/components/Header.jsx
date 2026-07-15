import { useContext } from "react"
import { userContext } from "../context/DataContext"

const Header = () => {
    const name = useContext(userContext)
  return (
    <div>
      <h1>Header {name}</h1>
    </div>
  )
}

export default Header
