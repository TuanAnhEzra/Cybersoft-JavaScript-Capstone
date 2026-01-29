import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "../assets/css/Product.css";

function ProductCard({ phone }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={phone.img} alt={phone.name} />

      <h3>{phone.name}</h3>

      <ul className="spec">
        <li>Màn hình: {phone.screen}</li>
        <li>Camera sau: {phone.backCamera}</li>
        <li>Camera trước: {phone.frontCamera}</li>
      </ul>

      <p className="price">
        {phone.price.toLocaleString()} đ
      </p>

      <button onClick={() => addToCart(phone)}>
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductCard;