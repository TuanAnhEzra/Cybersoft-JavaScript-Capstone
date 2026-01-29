import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Header.css";

export default function Header() {
  const { totalQty } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <h1 className="logo">📱 Phone Shop</h1>

        {/* Menu */}
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-icon">
            🛒
            {totalQty > 0 && (
              <span className="cart-badge">
                {totalQty}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
