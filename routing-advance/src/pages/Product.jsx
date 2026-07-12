import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <button className="rounded-full bg-amber-500 px-2">
        <Link to="/product/mens">Mens</Link>
      </button>
    </div>
  );
};

export default Product;
