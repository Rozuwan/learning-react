import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-2 ">
      <h1>Logo</h1>
      <div className="flex gap-10 ">
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
