import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { totalItems } = useCart();

  return (
    <header
      style={{
        padding: "20px",
        background: "linear-gradient(135deg, purple, violet)",
        color: "white"
      }}
    >
      <h1 style={{ textAlign: "center" }}>QuickCart</h1>

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "10px",
          flexWrap: "wrap"
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/category/Electronics" style={{ color: "white", textDecoration: "none" }}>
          Electronics
        </Link>
        <Link to="/category/Accessories" style={{ color: "white", textDecoration: "none" }}>
          Accessories
        </Link>
        <Link to="/category/Fashion" style={{ color: "white", textDecoration: "none" }}>
          Fashion
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;