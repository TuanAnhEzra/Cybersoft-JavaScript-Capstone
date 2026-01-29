import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../assets/css/Cart.css";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    decreaseQty,
    addToCart,
    totalPrice,
  } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Quay lại
      </button>

      <h2>🛒 Giỏ hàng</h2>

      {cart.length === 0 && (
        <p>Giỏ hàng trống</p>
      )}

      {cart.map((item) => (
        <div
          className="cart-item"
          key={item.id}
        >
          <img src={item.image} />

          <div className="cart-info">
            <h3>{item.name}</h3>

            <p>Giá: {item.price.toLocaleString()} đ</p>

            {/* NÚT + - */}
            <div className="qty-box">
              <button
                onClick={() =>
                  decreaseQty(item.id)
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>

            <p>
              Thành tiền:{" "}
              {(item.price *
                item.quantity
              ).toLocaleString()}{" "}
              đ
            </p>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Xóa
            </button>
          </div>
        </div>
      ))}

      {/* Tổng tiền */}
      {cart.length > 0 && (
        <div className="cart-total">
          <p>
            Tổng tiền:{" "}
            <span>
              {totalPrice.toLocaleString()} đ
            </span>
          </p>

          <button className="checkout-btn">
            Thanh toán
          </button>
        </div>
      )}
    </div>
  );
}
