import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <h3>Test</h3>
        <div className="nav-items">
        <Link to="/">Home </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/about">About </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
