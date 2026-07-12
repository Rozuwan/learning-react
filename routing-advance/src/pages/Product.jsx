import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <button className="rounded-full bg-amber-500 px-2 ">
        <Link to="mens">Mens</Link>
      </button>
      <button className="rounded-full bg-amber-500 px-2 ">
        <Link to="womens">Women</Link>
      </button>
      <Outlet />
    </div>
  );
};

export default Product;
