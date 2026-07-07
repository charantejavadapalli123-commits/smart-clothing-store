import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🛍 Smart Clothing Store</h2>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/add">Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;